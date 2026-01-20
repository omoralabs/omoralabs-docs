from registry.components.business_unit.schema import create_business_units
from registry.components.gl_accounts.schema import create_gl_accounts


def get_schemas(gl_accounts_segmented: bool) -> list:
    """
    Returns schemas in dependency order.
    """

    sqls = []

    if gl_accounts_segmented:
        sqls.append(create_business_units())
        sqls.append(create_gl_accounts(is_segmented=True))
    else:
        sqls.append(create_gl_accounts(is_segmented=False))

    return sqls
