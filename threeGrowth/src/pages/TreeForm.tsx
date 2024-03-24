import React, { useState } from 'react';

interface TreeFormData {
    threeType: string;
    gazolineForType: string;
    countGazoline: string;
}

interface TreeFormProps {
    onSubmit: (formData: TreeFormData) => void;
}

const TreeForm: React.FC<TreeFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<TreeFormData>({
        threeType: '',
        gazolineForType: '',
        countGazoline: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ threeType: '', gazolineForType: '', countGazoline: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="threeType" value={formData.threeType} onChange={handleChange} placeholder="Тип дерева" />
            <input type="text" name="gazolineForType" value={formData.gazolineForType} onChange={handleChange} placeholder="Бензин для типа" />
            <input type="text" name="countGazoline" value={formData.countGazoline} onChange={handleChange} placeholder="Количество бензина" />
            <button type="submit">Добавить дерево</button>
        </form>
    );
};

export default TreeForm;