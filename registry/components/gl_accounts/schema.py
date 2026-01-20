def create_gl_accounts(conn) -> None:
    """
    Create gl_accounts table.
    Args:
        conn: Database connection (sqlite3, duckdb, psycopg2)
    """

    conn.execute("""
        CREATE TABLE IF NOT EXISTS gl_accounts (
            id INTEGER PRIMARY KEY,
            name VARCHAR NOT NULL,
            parent_gl INTEGER,
            FOREIGN KEY(parent_gl) REFERENCES gl_accounts(id) ON DELETE SET NULL
            )
            """)
