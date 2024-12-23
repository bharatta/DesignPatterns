# Template Method Pattern

## Purpose
The Template Method pattern defines the skeleton of an algorithm in a base class but lets subclasses override specific steps of the algorithm without changing its structure.

## When to Use
- When you want to let clients extend only particular steps of an algorithm, but not the whole algorithm or its structure
- When you have several classes that contain almost identical algorithms with some minor differences
- When you want to avoid code duplication by moving common behavior into a superclass
- When you want to control at which points subclassing is allowed

## Real-World Examples
1. Data Mining Operations
   - Common steps for data extraction
   - Different implementations for various data sources

2. Build Tools
   - Common build process
   - Different steps for different project types

3. Document Generation
   - Common document structure
   - Different content generation for various formats

## Implementation Details
The implementation includes:
- Abstract class with template method
- Concrete implementations
- Hooks for optional steps
- Required operations for subclasses

## Usage Example

// Abstract class with template method
abstract class DataMiner {
public mine() {
this.openFile();
this.extractData();
this.parseData();
this.analyzeData();
this.sendReport();
this.closeFile();
}
protected abstract extractData(): void;
protected abstract parseData(): void;
}
// Concrete implementation
class PDFDataMiner extends DataMiner {
protected extractData() {
// PDF-specific extraction
}
protected parseData() {
// PDF-specific parsing
}
}

## Benefits
- Eliminates code duplication
- Lets you vary certain parts of a large algorithm
- Lets you enforce a template structure
- Provides hooks for optional extensions

## Drawbacks
- Some clients may be limited by the provided skeleton
- Violates Liskov Substitution Principle by default
- Template methods tend to be harder to maintain

## Related Patterns
- Strategy: Template Method uses inheritance, Strategy uses delegation
- Factory Method: Template Method specializes Factory Method
- Builder: Template Method is based on inheritance