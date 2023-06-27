/* 

author:	zak45
date:	27/06/2023
version:1.0.0

Utility for SCAnalyzer

*/


/*

Util

*/

// Read all active Default Colors  and set the value into root.customVariables.(groupName).parameters.mapcolor depend on index
// used as script callback in mapping output
function analyzerColorLoop(groupName)
{	
	var loopColor = [];
	var loopgrp = root.customVariables.getItemWithName(groupName);
	
	if (loopgrp.name != "undefined")
	{
		var loopIndex = loopgrp.calculatedParams.colorIndex.get() + 1;
		loopgrp.calculatedParams.colorIndex.set(loopIndex);
		
		for ( var l = 12; l > 0; l--) 
		{ 
			if ( l == 12 )
			{
				loopColor = root.modules.sCAnalyzer.parameters.defaultColors.segmentL.get();
				if (loopColor[3] == 1)
				{
					var numtest = loopIndex % (l);				
					if (numtest == 0)
					{
						loopgrp.calculatedParams.mapcolor.set(loopColor);
						break;
					}
				}
			} else if ( l == 11 ) {
				loopColor = root.modules.sCAnalyzer.parameters.defaultColors.segmentK.get();
				if (loopColor[3] == 1)
				{
					var numtest = loopIndex % (l);				
					if (numtest == 0)
					{
						loopgrp.calculatedParams.mapcolor.set(loopColor);
						break;
					}
				}
			} else if ( l == 10 ) {
				loopColor = root.modules.sCAnalyzer.parameters.defaultColors.segmentJ.get();
				if (loopColor[3] == 1)
				{
					var numtest = loopIndex % (l);				
					if (numtest == 0)
					{
						loopgrp.calculatedParams.mapcolor.set(loopColor);
						break;
					}
				}
			} else if ( l == 9 ) {
				loopColor = root.modules.sCAnalyzer.parameters.defaultColors.segmentI.get();
				if (loopColor[3] == 1)
				{
					var numtest = loopIndex % (l);				
					if (numtest == 0)
					{
						loopgrp.calculatedParams.mapcolor.set(loopColor);
						break;
					}
				}
			} else if ( l == 8 ) {
				loopColor = root.modules.sCAnalyzer.parameters.defaultColors.segmentH.get();
				if (loopColor[3] == 1)
				{
					var numtest = loopIndex % (l);				
					if (numtest == 0)
					{
						loopgrp.calculatedParams.mapcolor.set(loopColor);
						break;
					}
				}
			} else if ( l == 7 ) {
				loopColor = root.modules.sCAnalyzer.parameters.defaultColors.segmentG.get();
				if (loopColor[3] == 1)
				{
					var numtest = loopIndex % (l);				
					if (numtest == 0)
					{
						loopgrp.calculatedParams.mapcolor.set(loopColor);
						break;
					}
				}
			} else if ( l == 6 ) {
				loopColor = root.modules.sCAnalyzer.parameters.defaultColors.segmentF.get();
				if (loopColor[3] == 1)
				{
					var numtest = loopIndex % (l);				
					if (numtest == 0)
					{
						loopgrp.calculatedParams.mapcolor.set(loopColor);
						break;
					}
				}
			} else if ( l == 5 ) {
				loopColor = root.modules.sCAnalyzer.parameters.defaultColors.segmentE.get();
				if (loopColor[3] == 1)
				{
					var numtest = loopIndex % (l);				
					if (numtest == 0)
					{
						loopgrp.calculatedParams.mapcolor.set(loopColor);
						break;
					}
				}
			} else if ( l == 4 ) {
				loopColor = root.modules.sCAnalyzer.parameters.defaultColors.segmentD.get();
				if (loopColor[3] == 1)
				{
					var numtest = loopIndex % (l);				
					if (numtest == 0)
					{
						loopgrp.calculatedParams.mapcolor.set(loopColor);
						break;
					}
				}
			} else if ( l == 3 ) {
				loopColor = root.modules.sCAnalyzer.parameters.defaultColors.segmentC.get();
				if (loopColor[3] == 1)
				{
					var numtest = loopIndex % (l);				
					if (numtest == 0)
					{
						loopgrp.calculatedParams.mapcolor.set(loopColor);
						break;
					}
				}
			} else if ( l == 2 ) {
				loopColor = root.modules.sCAnalyzer.parameters.defaultColors.segmentB.get();
				if (loopColor[3] == 1)
				{
					var numtest = loopIndex % (l);				
					if (numtest == 0)
					{
						loopgrp.calculatedParams.mapcolor.set(loopColor);
						break;
					}
				}
			} else if ( l == 1 ) {
				loopColor = root.modules.sCAnalyzer.parameters.defaultColors.segmentA.get();
				if (loopColor[3] == 1)
				{
					var numtest = loopIndex % (l);				
					if (numtest == 0)
					{
						loopgrp.calculatedParams.mapcolor.set(loopColor);
						break;
					}
				}
			} 
		}
	}
}

// Read all IP from custom variables group, select modulo index value from xx(max 12) to 1 
function analyzerIPModuloLoop(groupName)
{
	var loopip = root.customVariables.getItemWithName(groupName);
	
	if (loopgrp.name != "undefined")
	{
		var loopipAdditionalIP = loopip.variables.getItems();
		var loopIndex = loopip.calculatedParams.index.get() + 1;
		
		if (loopipAdditionalIP)
		{
			for ( var l = (loopipAdditionalIP.length -1); l >= 0; l--) 
			{ 
		
				if (loopipAdditionalIP[l].name.contains("ip"))
				{				
					var loopipIPName = loopipAdditionalIP[l].name;
					
					var loopipNewIP = loopipAdditionalIP[l].getChild(loopipIPName);
					var loopipAddIP = loopipNewIP.get();
					
					if (loopipAddIP != "0.0.0.0" && loopipAddIP != "")
					{
						var numtest = loopIndex % (l + 1);
					
						if (numtest == 0)
						{
							loopip.calculatedParams.ip.set(loopipAddIP);
							loopip.calculatedParams.index.set(loopIndex);
							break;
						}					
						
					} else {
					
						script.log("We bypass this one (value): "+loopipAdditionalIP[l].name);
					}
					
				} else {
					
					script.log("We bypass this one (not ip name): "+loopipAdditionalIP[l].name);				
				}
			}
			
		} else {

			script.log('Group does not exist or no IP !!');		
		
		}
	}
}

// Read all IPs from custom variables group and loop from 1 ...n - sequential 
function analyzerIPSequentialLoop(groupName)
{	
	var loopipseq = root.customVariables.getItemWithName(groupName);
	if (loopipseq.name != "undefined" && loopipseq.calculatedParams.ipList.getAllOptions().length != 0)
	{
		loopipseq.calculatedParams.ipList.setNext(true);
		
	} else {
		
		script.log('Group does not exist or no IP !!');
	}	
}
