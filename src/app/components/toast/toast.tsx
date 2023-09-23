'use client'

import React, { useState, useEffect } from "react";

function Toast({ show, message, duration = 3000, onClose }: Toast) {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    setIsVisible(show);

    if (show) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, duration);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [show, duration, onClose]);

  return isVisible ? (
    <div className="toast toast-end absolute">
      <div className="alert alert-success">
        <span>{message}</span>
      </div>
    </div>
  ) : null;
}

export default Toast;
