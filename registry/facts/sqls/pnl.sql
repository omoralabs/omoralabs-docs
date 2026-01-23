CREATE TABLE IF NOT EXISTS pnl (
    period_id INTEGER NOT NULL,
    gl_account_id INTEGER NOT NULL,
    value_type_id INTEGER NOT NULL,
    amount INTEGER NOT NULL,
    FOREIGN KEY (period_id) REFERENCES periods(id),
    FOREIGN KEY (gl_account_id) REFERENCES gl_accounts(id),
    FOREIGN KEY (value_type_id) REFERENCES value_types(id),
    PRIMARY KEY (period_id, gl_account_id, value_type_id)
)