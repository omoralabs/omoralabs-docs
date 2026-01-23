CREATE TABLE IF NOT EXISTS gl_accounts (
    id INTEGER PRIMARY KEY,
    name VARCHAR NOT NULL,
    parent_gl INTEGER,
    business_unit_id INTEGER,
    FOREIGN KEY (parent_gl) REFERENCES gl_accounts(id) ON DELETE SET NULL,
    FOREIGN KEY (business_unit_id) REFERENCES business_units(id) ON DELETE CASCADE
)