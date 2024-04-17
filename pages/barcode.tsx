import { useState, useEffect } from 'react';
import useScanDetection from 'use-scan-detection';

const Barcode = () => {
    const [barCode, setBarcode] = useState<any>('No Barcode Scanned');

    if (typeof window !== 'undefined') {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useScanDetection({
            onComplete: setBarcode
        });
    }
    else {
        return null;
    }

    return (
        <div className="flex justify-center pt-10">{barCode}</div>
    );
}

export default Barcode;