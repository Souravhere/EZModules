import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PasswordStrengthMeter.css'; // Add your CSS styling here

const PasswordStrengthMeter = ({ minLength, suggestions }) => {
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState(0);
    const [feedback, setFeedback] = useState('');

    const calculateStrength = (password) => {
        let score = 0;
        const suggestionsList = [];

        if (password.length >= minLength) score += 1;
        else suggestionsList.push(`Use at least ${minLength} characters.`);

        if (/[A-Z]/.test(password)) score += 1;
        else suggestionsList.push('Include at least one uppercase letter.');

        if (/[a-z]/.test(password)) score += 1;
        else suggestionsList.push('Include at least one lowercase letter.');

        if (/[0-9]/.test(password)) score += 1;
        else suggestionsList.push('Include at least one number.');

        if (/[^A-Za-z0-9]/.test(password)) score += 1;
        else suggestionsList.push('Include at least one special character.');

        setStrength(score);
        setFeedback(suggestionsList.join(' '));
    };

    const handleChange = (e) => {
        const { value } = e.target;
        setPassword(value);
        calculateStrength(value);
    };

    const getStrengthLabel = () => {
        switch (strength) {
            case 1:
                return 'Very Weak';
            case 2:
                return 'Weak';
            case 3:
                return 'Moderate';
            case 4:
                return 'Strong';
            case 5:
                return 'Very Strong';
            default:
                return 'Very Weak';
        }
    };

    return (
        <div className="password-strength-meter">
            <input
                type="password"
                value={password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="password-input"
            />
            <div className="strength-indicator">
                <div
                    className={`strength-bar strength-${strength}`}
                    style={{ width: `${(strength / 5) * 100}%` }}
                ></div>
            </div>
            <p className="strength-label">{getStrengthLabel()}</p>
            {strength < 5 && (
                <p className="password-feedback">{feedback}</p>
            )}
        </div>
    );
};

PasswordStrengthMeter.propTypes = {
    minLength: PropTypes.number,
    suggestions: PropTypes.bool,
};

PasswordStrengthMeter.defaultProps = {
    minLength: 8,
    suggestions: true,
};

export default PasswordStrengthMeter;
