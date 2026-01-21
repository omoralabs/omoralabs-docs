from registry.components.database.utils import get_json, json_to_sql


def get_schemas(dimensions: list[str]) -> list:
    """
    Resolves dimension dependencies and returns SQL schemas in correct order.

    Args:
        dimensions: List of dimension names to include (e.g., ["gl_accounts_segmented"])

    Returns:
        List of SQL CREATE TABLE statements in dependency order
    """
    registry = get_json("registry/components/database/registry.json")

    def resolve(dim, visited=None):
        if visited is None:
            visited = set()
        if dim in visited:
            return []
        visited.add(dim)

        schemas = []
        for dep in registry[dim]["dependencies"]:
            schemas.extend(resolve(dep, visited))
        schemas.append(registry[dim]["schema"])
        return schemas

    result = []
    seen = set()
    for dim in dimensions:
        for schema_path in resolve(dim):
            if schema_path not in seen:
                result.append(json_to_sql(schema_path))
                seen.add(schema_path)

    return result
