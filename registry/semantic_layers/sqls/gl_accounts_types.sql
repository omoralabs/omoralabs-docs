CREATE TABLE IF NOT EXISTS gl_accounts_types (
    id INTEGER PRIMARY KEY,
    name VARCHAR NOT NULL CHECK (name IN ('pnl', 'balance_sheet'))
)