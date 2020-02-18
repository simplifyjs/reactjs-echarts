/**
 * Interface for dynamic Bar Animation Volume Value.
 * @interface VolumeDataItems
 */
export interface VolumeDataItems {
	chartVolume: number[];
	xAxisData: number[];
}

/**
 * Interface for dynamic Bar Stack Usage Value.
 * @interface UsageDataItems
 */
export interface UsageDataItems {
	documentType: string[];
	documentSize: number[]; 
	maxAllowedUsage: number[];
}

/**
 * Interface for dynamic Line Graph Activity Value.
 * @interface ActivityDataItems
 */
export interface ActivityDataItems {
	activityTs: string[];
	activityVolume: number[];
}
