from registry.components.database.methods import DBConnect
from registry.components.database.schema_manager import get_schemas


def main(db_name: str) -> None:
    """Set up the database schema for value_types"""

    table_name = "value_types"
    # Change path to your data location
    value_types = "registry/samples/value_types/sample.csv"

    try:
        print("Starting process...")
        print("Getting SQL Schemas...")
        sqls = get_schemas([f"{table_name}"])

        print("Starting DB...")
        db = DBConnect(db_name)
        db.implement_tables(sqls)

        print("Inserting data now...")
        db.insert_csvs(value_types, f"{table_name}")
        print(f"✓ {table_name} data inserted")

    except Exception as e:
        print(f"Failure setting up db schema and filling it in with sample data: {e}")
        raise


if __name__ == "__main__":
    db_name = "company_structure"  # write the db_name here
    main(db_name)
