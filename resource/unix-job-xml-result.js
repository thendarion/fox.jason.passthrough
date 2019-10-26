/*
 *  This file is part of the DITA Passthrough Plug-in project.
 *  See the accompanying LICENSE file for applicable licenses.
 */

//
//	Converts a value to result as generated by unix machines
//
//	@param  string -   The value to convert
//	@param  to -  The property to set
//

project.setProperty(
  attributes.get("to"), "file:" + attributes.get("string")
);