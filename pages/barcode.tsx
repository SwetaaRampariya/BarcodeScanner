import { useState, useEffect } from 'react';
import useScanDetection from 'use-scan-detection';

const Barcode = () => {
    const [barCode, setBarcode] = useState<any>('No Barcode Scanned');

    if (typeof window !== 'undefined') {
        useScanDetection({
            onComplete: setBarcode
        });
    }

    return (
        <div className="flex justify-center pt-10">{barCode}</div>
    );
}

export default Barcode;