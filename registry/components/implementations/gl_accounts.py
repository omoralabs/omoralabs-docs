from registry.components.database.methods import DBConnect
from registry.components.database.schema_manager import get_schemas


def main(db_name: str, gl_accounts_segmented: bool) -> None:
    """Set up the database schema for gl_accounts"""

    # Change path to your data location
    gls_simple = "registry/samples/gl_accounts/simple.csv"
    gls_segmented = "registry/samples/gl_accounts/segmented.csv"
    business_units = "registry/samples/business_units/sample.csv"

    try:
        print("Starting process...")
        print("Getting SQL Schemas...")

        dimensions = (
            "gl_accounts_segmented" if gl_accounts_segmented else "gl_accounts_simple"
        )
        sqls = get_schemas([dimensions])

        print("Starting DB...")
        db = DBConnect(db_name)
        db.implement_tables(sqls)

        print("Inserting data now...")
        if gl_accounts_segmented:
            db.insert_csvs(business_units, "business_units")
            print("✓ Business Units inserted")
            db.insert_csvs(gls_segmented, "gl_accounts")
            print("✓ GL Accounts inserted")
        else:
            db.insert_csvs(gls_simple, "gl_accounts")
            print("✓ GL Accounts inserted")
    except Exception as e:
        print(f"Failure setting up db schema and filling it in with sample data: {e}")
        raise


if __name__ == "__main__":
    db_name = "company_structure"  # write the db_name here
    gl_accounts_segmented = False  # choose True or False
    main(db_name, gl_accounts_segmented)
