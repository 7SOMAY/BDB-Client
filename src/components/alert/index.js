import React from 'react';
import { motion } from 'framer-motion';

const Alert = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white p-6 rounded shadow-lg w-64"
            >
                <p className="mb-4">{message}</p>
                <div className="flex justify-end">
                    <button
                        className="mr-2 bg-green-500 text-white px-4 py-2 rounded"
                        onClick={onConfirm}
                    >
                        Yes
                    </button>
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded"
                        onClick={onCancel}
                    >
                        No
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default Alert;
