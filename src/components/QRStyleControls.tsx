import React from 'react';
import { QRCodeStyle } from '../types/qr';
import { ImageUpload } from './ImageUpload';

interface QRStyleControlsProps {
  style: QRCodeStyle;
  onStyleChange: (style: Partial<QRCodeStyle>) => void;
}

export function QRStyleControls({ style, onStyleChange }: QRStyleControlsProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Foreground Color
          </label>
          <input
            type="color"
            value={style.fgColor}
            onChange={(e) => onStyleChange({ fgColor: e.target.value })}
            className="h-10 w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Background Color
          </label>
          <input
            type="color"
            value={style.bgColor}
            onChange={(e) => onStyleChange({ bgColor: e.target.value })}
            className="h-10 w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Background Opacity
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={style.opacity * 100}
            onChange={(e) => onStyleChange({ opacity: Number(e.target.value) / 100 })}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Size
          </label>
          <input
            type="range"
            min="128"
            max="512"
            value={style.size}
            onChange={(e) => onStyleChange({ size: Number(e.target.value) })}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Error Correction Level
          </label>
          <select
            value={style.level}
            onChange={(e) => onStyleChange({ level: e.target.value as 'L' | 'M' | 'Q' | 'H' })}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="L">Low</option>
            <option value="M">Medium</option>
            <option value="Q">Quartile</option>
            <option value="H">High</option>
          </select>
        </div>
      </div>

      <ImageUpload
        imageUrl={style.imageUrl}
        onImageChange={(url) => onStyleChange({ imageUrl: url })}
      />
    </div>
  );
}