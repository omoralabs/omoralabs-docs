import sys
from pathlib import Path

# Add parent directory (registry/) to Python path
sys.path.insert(0, str(Path(__file__).parent.parent))
