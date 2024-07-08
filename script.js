const englishToSecret = {
    'A': 'C', 'B': 'F', 'C': 'I', 'D': 'L', 'E': 'O', 'F': 'R', 'G': 'U', 'H': 'X', 'I': 'A', 'J': 'D', 'K': 'G', 'L': 'J',
    'M': 'M', 'N': 'P', 'O': 'S', 'P': 'V', 'Q': 'Y', 'R': 'Z', 'S': 'W', 'T': 'T', 'U': 'Q', 'V': 'N', 'W': 'K', 'X': 'H',
    'Y': 'E', 'Z': 'B', '1': '3', '2': '6', '3': '9', '4': '2', '5': '4', '6': '8', '7': '1', '8': '5', '9': '0', '0': '7'
};

const secretToEnglish = Object.fromEntries(Object.entries(englishToSecret).map(([key, value]) => [value, key]));

const categoryMap = {
    'F': 'Clothing',
    'G': 'Footwear',
    'M': 'Accessories',
    'S': 'Jewellery',
    'U': 'Cosmetics',
    'P': 'Kids Collection'
};

const appMap = {
    'QW': 'Markaz',
    'SN': 'Zariya',
    'BT': 'Daraz',
    'FV': 'Wasooq',
    'OZ': 'Raabta'
};

function convertString(input, mapping) {
    return input.toUpperCase().split('').map(char => mapping[char] || char).join('');
}

function convertCode() {
    const inputCode = document.getElementById('inputCode').value;
    const category = document.getElementById('category').value;
    const app = document.getElementById('app').value;

    const secretCode = convertString(inputCode, englishToSecret);
    const finalCode = `${app}${category}${secretCode}`;

    document.getElementById('convertedCode').innerText = finalCode;
    document.getElementById('detectedApp').innerText = '';
    document.getElementById('detectedCategory').innerText = '';
}

function convertBack() {
    const inputCode = document.getElementById('inputCode').value;

    const appCode = inputCode.slice(0, 2);
    const categoryCode = inputCode.slice(2, 3);
    const secretCode = inputCode.slice(3);

    const app = appMap[appCode] || 'Unknown';
    const category = categoryMap[categoryCode] || 'Unknown';

    const englishCode = convertString(secretCode, secretToEnglish);

    document.getElementById('convertedCode').innerText = englishCode;
    document.getElementById('detectedApp').innerText = app;
    document.getElementById('detectedCategory').innerText = category;
}
