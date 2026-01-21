from registry.components.database.methods import DBConnect
from registry.components.database.schema_manager import get_schemas


def main(db_name: str, gl_accounts_segmented: bool) -> None:
    """
    Set up the database schema for gl_accounts
    """

    gls_simple = "registry/samples/gl_accounts/simple.csv"
    gls_segmented = "registry/samples/gl_accounts/segmented.csv"
    business_units_segmented = "registry/samples/business_units/sample.csv"

    try:
        print("Starting process...")
        print("Getting SQL Schemas...")
        sqls = get_schemas(gl_accounts_segmented)

        print("Starting DB...")
        db = DBConnect(db_name)
        db.implement_tables(sqls)

        if gl_accounts_segmented:
            db.insert_csvs(business_units_segmented, "business_units")
            db.insert_csvs(gls_segmented, "gl_accounts")
        else:
            db.insert_csvs(gls_simple, "gl_accounts")
    except Exception as e:
        print(f"Failure setting up db schema and filling it in with sample data: {e}")
        raise
