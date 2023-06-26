import React, {useState} from "react";
import { useNavigate } from "react-router";

export default function Create() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    });

    // Update state props
    
    // Handle submission

    // Input values from the user
    return ("Create");
}