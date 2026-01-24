from pathlib import Path

from .data_loader import load_sample_data
from .methods import DBConnect
from .schema_manager import get_schemas

db_name = "budget_vs_actuals"


def setup_db(remote: bool = False):
    print("Initiating DB...")
    db = DBConnect(db_name, remote)

    print("Getting components...")
    registry = Path(__file__).parent

    print("Getting SQL schema...")
    schema = get_schemas(registry)
    print("✓ SQL Schema Package in hands")

    print("Implementing SQL schema...")
    db.implement_tables(schema)
    print("✓ SQL Schema Package implemented in DB")

    print("Loading sample data...")
    load_sample_data(db, registry)
    print("✓ Process completed")


def entry_setup_local_db():
    """Entry point for console script"""
    setup_db()


def entry_to_remote():
    """Entry point for console script"""
    setup_db(remote=True)
