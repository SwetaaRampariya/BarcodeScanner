'use client'

import { useState } from 'react';
import useScanDetection from 'use-scan-detection';

export default function Barcode() {
  const [barCode , setBarcode] = useState('No Barcode Scanned')
  useScanDetection({
    onComplete :setBarcode
  })

  return (
    <div className="flex justify-center pt-10">{ barCode}</div>
  );
}
