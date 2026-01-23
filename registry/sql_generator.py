import os
from pathlib import Path

from database.utils import get_json, json_to_sql


def main():
    MODULE_DIR = Path(__file__).parent
    registry = get_json(str(MODULE_DIR / "database/registry.json"))

    for section in ["semantic_layers", "facts"]:
        for _, config in registry[section].items():
            json_path = str(MODULE_DIR / config["schema"])
            sql = json_to_sql(json_path)

            dir_path = os.path.dirname(json_path)
            filename = os.path.basename(json_path).replace(".json", ".sql")
            sql_path = os.path.join(dir_path, "sqls", filename)

            with open(sql_path, "w") as f:
                f.write(sql)

            print(f"✓ Generated {sql_path}")


if __name__ == "__main__":
    main()
