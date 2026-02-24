# QuantityMeasurementApp

### 📅 UC1 : Feet Measurement Equality
- Implements value-based equality comparison for measurements in feet using proper object-oriented design.
- Two Feet objects are considered equal if their numerical values are equal.
- Key Concepts
- Overriding equals() method
- Using Double.compare() for floating-point comparison
- Null and type safety checks
- Encapsulation and immutability
- Example: Input: 1.0 ft and 1.0 ft Output: true

  UC1-[FeetEquality](https://github.com/shraddhapal27/QuantityMeasurementApp/tree/feature/UC1-FeetEquality/src)

---

### 📅 UC2 : Inch Measurement Equality
- Implements value-based equality comparison for measurements in inches.
- Two Inch objects are considered equal if their numerical values are equal.
- Key Concepts
- Overriding equals() method
- Using Double.compare() for floating-point comparison
- Null and type safety checks
- Maintaining consistency with Feet equality design
- Example: Input: 1.0 inch and 1.0 inch Output: true

UC2-[InchEquality](https://github.com/shraddhapal27/QuantityMeasurementApp/tree/feature/UC2-InchEquality/src)

---

### 📅 UC3 : Generic Length Class (DRY Principle)
- Refactored separate Feet and Inch classes into a single Length class.
- Introduced LengthUnit enum to represent supported measurement units.
- Eliminated code duplication by applying the DRY (Don't Repeat Yourself) principle.
- Implemented cross-unit equality comparison using conversion to a common base unit (inches).
- Maintains backward compatibility with UC1 and UC2 functionality.
- Key Concepts:
  - DRY Principle
  - Enum usage for type safety
  - Encapsulation of value and unit
  - Cross-unit comparison logic
  - Proper equals() and hashCode() implementation
- Example: Input: Length(1.0, FEET) and Length(12.0, INCHES) Output: true

UC3-[Generic Length Class](https://github.com/shraddhapal27/QuantityMeasurementApp/tree/feature/UC3-GenericLength/src)

---

### 📅 UC4 : Extended Length Units Support - YARD, CENTIMETER
- Extended the generic Length class to support additional measurement units: YARD and CENTIMETER.
- Updated LengthUnit enum with the new units and their conversion factors.
- Maintained DRY principle—no duplicate logic for new units.
- Ensured cross-unit equality comparison works for all supported units (FEET, INCHES, YARD, CENTIMETER).
- Backward compatible: all UC1, UC2, and UC3 functionality remains intact.
- Key Concepts:
 - Enum extension for type-safe new units
 - Conversion logic for added units
 - Cross-unit comparison across all length units
 - Proper equals() and hashCode() handling for extended units
- Example: Input: Length(3.0, FEET) and Length(1.0, YARD) Output: true

UC4-[Entended Length Class](https://github.com/shraddhapal27/QuantityMeasurementApp/tree/feature/UC4-YardEquality/src)

---

### 📅 UC5 : Length Unit Conversion API
- Extended Length class to provide explicit conversion between all supported units (FEET, INCHES, YARDS, CENTIMETERS).
- Added Length.convert(value, sourceUnit, targetUnit) and Length.convertTo(targetUnit) for instance conversions.
- Maintained DRY principle with base unit normalization.
- Backward compatible with all UC1–UC4 functionality.
- Key Concepts:
 - Enum-based conversion factors for type safety
 - Cross-unit conversions with proper precision
 - Immutability and value-object semantics
 - Input validation for null, NaN, and infinite values
 - Overloaded conversion methods for flexibility
UC5-[Length Unit Conversion](https://github.com/shraddhapal27/QuantityMeasurementApp/tree/feature/UC5-UnitConversion/src)

---

### 📅 UC6 : Length Unit Conversion API (UC5 → UC6 Enhancement)
- Extended Length class to provide explicit conversion between any supported units (FEET, INCHES, YARDS, CENTIMETERS).
- Introduced:
 - Length.convert(value, sourceUnit, targetUnit) – static method for raw numeric conversion.
 - length.convertTo(targetUnit) – instance method to convert an existing Length object.
 - Input validation ensures null, NaN, and infinite values are handled safely.
 - Maintains DRY principle, immutability, and backward compatibility with UC1–UC5.
- Key Concepts:
 - Cross-unit conversion via base-unit normalization
 - Enum-based type-safe conversion factors
 - Precision handling using epsilon tolerance
 - Overloaded conversion methods for flexible API usage
UC6-[Length Unit Conversion](https://github.com/shraddhapal27/QuantityMeasurementApp/tree/feature/UC6-UnitAddition/src)

---

### 📅 UC7: Addition with Target Unit Specification
- Supports addition of two lengths with the ability to explicitly specify the target unit for the result. Extends UC6 by allowing flexibility in choosing the result unit instead of defaulting to the first operand’s unit. Ensures accurate conversions, commutativity, and immutability.
- Key Concepts
 - Addition of lengths with explicit target unit
 - Cross-unit conversion to any supported length unit
 - Validation for nulls, zero, negative, NaN, and infinite values
 - Commutativity maintained regardless of target unit
 - Floating-point precision handling across units
- Example:

Input: 1.0 ft + 12.0 in → Target Unit: FEET → Output: 2.0 ft
Input: 1.0 ft + 12.0 in → Target Unit: INCHES → Output: 24.0 in
Input: 1.0 ft + 12.0 in → Target Unit: YARDS → Output: ~0.667 yd
Input: 1.0 yd + 3.0 ft → Target Unit: YARDS → Output: 2.0 yd
Input: 36.0 in + 1.0 yd → Target Unit: FEET → Output: 6.0 ft
UC7-[Target Unit Specification](https://github.com/shraddhapal27/QuantityMeasurementApp/tree/feature/UC7-TargetUnitAddition/src)

---

### 📅 UC8: Refactoring Unit Enum to Standalone with Conversion Responsibility
- Refactors the design by extracting LengthUnit from QuantityLength into a standalone enum that handles all unit conversions. This improves cohesion, reduces coupling, eliminates circular dependencies, and establishes a scalable pattern for future measurement categories (weight, volume, etc.).
- Key Concepts
  - Standalone LengthUnit enum with conversion responsibility
  - QuantityLength simplified: focuses on equality and arithmetic
  - Conversion methods: convertToBaseUnit() and convertFromBaseUnit()
  - Backward compatible: all UC1–UC7 operations continue to work
  - Supports future measurement categories using the same pattern
  - Maintains immutability, type safety, and thread-safety
- Example:

Input: Quantity(1.0, FEET).convertTo(INCHES) → Output: Quantity(12.0, INCHES)
Input: Quantity(1.0, FEET).add(Quantity(12.0, INCHES), FEET) → Output: Quantity(2.0, FEET)
Input: Quantity(36.0, INCHES).equals(Quantity(1.0, YARDS)) → Output: true
Input: Quantity(2.54, CENTIMETERS).convertTo(INCHES) → Output: Quantity(~1.0, INCHES)
Input: LengthUnit.INCHES.convertToBaseUnit(12.0) → Output: 1.0 (feet)
UC8-[Refactoring Unit](https://github.com/shraddhapal27/QuantityMeasurementApp/tree/feature/UC8-StandaloneUnit/src)

---

### 📅 UC9: Weight Measurement Equality, Conversion, and Addition
- Description: UC9 extends the Quantity Measurement App to support weight measurements (kilogram, gram, pound) alongside length. Weight operations mirror - length operations: equality, conversion, and addition. Weight and length are separate, type-safe categories.

- Units & Conversion:

KILOGRAM (kg) – base unit
GRAM (g) – 1 kg = 1000 g
POUND (lb) – 1 lb ≈ 0.453592 kg
Implementation:

- WeightUnit enum handles all conversion logic.
- QuantityWeight class handles equality and arithmetic, delegating conversions to WeightUnit.
- Supports cross-unit equality and addition, explicit target unit, and immutable objects.
- Round-trip conversions maintain precision using epsilon.
- Weight vs. length comparisons are not allowed.
- Example:

Quantity(1.0, KILOGRAM).equals(Quantity(1000.0, GRAM)) → true
Quantity(2.20462, POUND).convertTo(KILOGRAM) → Quantity(~1.0, KILOGRAM)
Quantity(1.0, KILOGRAM).add(Quantity(1000.0, GRAM), GRAM) → Quantity(2000.0, GRAM)
UC9-[Weight Measurement](https://github.com/shraddhapal27/QuantityMeasurementApp/tree/feature/UC9-WeightMeasurement/src)

---

### 📅 UC10 – Generic Measurement Refactor
- Refactored the system to use a single generic class Quantity for all measurement categories.

- Introduced IMeasurable interface
- Implemented LengthUnit, WeightUnit as enums
- Removed duplicate quantity classes
- Ensured compile-time type safety
- Prevented cross-category comparison
- Easily supports new units (Volume, Time, Temperature, etc.)
- Result: Cleaner, scalable, and fully extensible measurement system.
UC10-[Generic Measurement Refactor](https://github.com/shraddhapal27/QuantityMeasurementApp/tree/feature/UC10-GenericQuantity/src)

---

### 📅 UC11: Volume Measurement Equality, Conversion, and Addition
- Description: UC11 extends the Quantity Measurement App to support volume measurements (litre, millilitre, gallon) using the existing generic architecture. Volume operations mirror length and weight operations: equality, conversion, and addition. Volume, weight, and length remain separate, type-safe categories.

- Units & Conversion:

- LITRE (L) – base unit
- MILLILITRE (mL) – 1 L = 1000 mL
- GALLON (gal) – 1 gal ≈ 3.78541 L
- Implementation:

- VolumeUnit enum handles all conversion logic.
- Uses the generic Quantity class (no new Quantity class required).
- Supports cross-unit equality and addition, explicit target unit, and immutable objects.
- Round-trip conversions maintain precision using epsilon.
- Volume vs. length vs. weight comparisons are not allowed.
- Example:

Quantity(1.0, LITRE).equals(Quantity(1000.0, MILLILITRE)) → true
Quantity(1.0, GALLON).convertTo(LITRE) → 3.78541
Quantity(1.0, LITRE).add(Quantity(1000.0, MILLILITRE), MILLILITRE) → 2000.0
UC11-[Volume Measurement](https://github.com/shraddhapal27/QuantityMeasurementApp/tree/feature/UC11-VolumeEquality/src)

---

### 📅 UC12: Quantity Subtraction and Division
- Description: UC12 extends the Quantity Measurement App by adding subtraction and division operations to the generic Quantity class. These operations work across all measurement categories (length, weight, volume) while maintaining strict type safety.

- Features:

- Subtraction with implicit and explicit target units
- Cross-unit operations within the same category
- Division returns a unitless ratio (double)
- Cross-category operations prevented by generics
- Null validation and division-by-zero handling
- Immutability and precision maintained
- Example:

Quantity(10.0, FEET).subtract(Quantity(6.0, INCH)) → 9.5 FEET
Quantity(5.0, LITRE).subtract(Quantity(2.0, LITRE)) → 3.0 LITRE
Quantity(10.0, FEET).divide(Quantity(2.0, FEET)) → 5.0
UC12-[Subtraction and Division](https://github.com/shraddhapal27/QuantityMeasurementApp/tree/feature/UC12-SubtractionDivision/src)

---

### 📅 UC13: Centralized Arithmetic Operations Using Enum Strategy
- Description: UC14 refactors the Quantity Measurement App by introducing an ArithmeticOperation enum (ADD, SUBTRACT, DIVIDE) to centralize arithmetic behavior. All operations now delegate to a single private helper method, eliminating duplicate validation and conversion logic while preserving existing functionality.

- Implementation:

- ArithmeticOperation enum handles operation-specific computation.
- Private helper method performs validation, base unit conversion, enum dispatch, and result conversion.
- Add and subtract results are rounded to two decimals.
- Divide returns a dimensionless raw double value.
- No changes required to existing unit enums (LengthUnit, WeightUnit, VolumeUnit).
- Full backward compatibility with UC12 maintained.
- Example:

Quantity(10.0, FEET).add(Quantity(5.0, FEET)) → 15.00 FEET
Quantity(10.0, FEET).subtract(Quantity(5.0, FEET)) → 5.00 FEET
Quantity(10.0, FEET).divide(Quantity(5.0, FEET)) → 2.0
UC13-[Centralized Arithmetic Operations](https://github.com/shraddhapal27/QuantityMeasurementApp/tree/feature/UC13-CentralizedArithmetic/src)



