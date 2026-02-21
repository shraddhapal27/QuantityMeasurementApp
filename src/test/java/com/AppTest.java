package com;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

/**
 * Unit test for simple App.
 */
public class AppTest {

	 @Test
	    void givenSameFeet_shouldReturnEqual() {
	        Feet f1 = new Feet(1);
	        Feet f2 = new Feet(1);

	        assertEquals(f1, f2);
	    }
}
