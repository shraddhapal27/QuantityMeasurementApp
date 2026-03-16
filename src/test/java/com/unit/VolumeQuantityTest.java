package com.unit;



import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import com.quantity.Quantity;
import com.units.VolumeUnit;

public class VolumeQuantityTest {

	@Test
	void givenLitreAndMillilitre_WhenCompared_ShouldReturnTrue() {

		Quantity<VolumeUnit> litre = new Quantity<>(1, VolumeUnit.LITRE);
		Quantity<VolumeUnit> ml = new Quantity<>(1000, VolumeUnit.MILLILITRE);

		assertTrue(litre.equals(ml));
	}
}

