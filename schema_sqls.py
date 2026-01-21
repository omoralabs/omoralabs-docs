import os

from registry.components.database.utils import get_json, json_to_sql


def main():
    registry = get_json("registry/components/database/registry.json")

    for _, config in registry.items():
        json_path = config["schema"]
        sql = json_to_sql(json_path)

        dir_path = os.path.dirname(json_path)
        filename = os.path.basename(json_path).replace(".json", ".sql")
        sql_path = os.path.join(dir_path, "presentation", filename)

        with open(sql_path, "w") as f:
            f.write(sql)

        print(f"✓ Generated {sql_path}")


if __name__ == "__main__":
    main()
