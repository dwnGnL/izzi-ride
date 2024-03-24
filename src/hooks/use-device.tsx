'use client'
import type { DeviceType } from '@type/menu.type'

import { useState, useEffect } from 'react'

function useDevice(): DeviceType | undefined {
	const [deviceType, setDeviceType] = useState<DeviceType>()

	useEffect(() => {
		setDeviceType(deviceSizeHandler)
		window.addEventListener('resize', setDeviceType.bind(null, deviceSizeHandler))
	}, [])

	function deviceSizeHandler(): DeviceType {
		if (window.innerWidth <= 425) return 'mobile'
		if (window.innerWidth > 768) return 'desktop'
		return 'tablet'
	}
	return deviceType
}

export default useDevice
