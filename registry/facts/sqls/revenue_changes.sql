CREATE TABLE IF NOT EXISTS revenue_changes (
    period_id INTEGER NOT NULL,
    revenue_type_id INTEGER NOT NULL,
    value_type_id INTEGER NOT NULL,
    nr_of_customers INTEGER NOT NULL,
    value_per_customer DOUBLE NOT NULL,
    FOREIGN KEY (period_id) REFERENCES periods(id),
    FOREIGN KEY (revenue_type_id) REFERENCES revenue_types(id),
    FOREIGN KEY (value_type_id) REFERENCES value_types(id),
    PRIMARY KEY (period_id, revenue_type_id, value_type_id)
)