<?php

// Check if the language preference cookie is set
if(isset($_COOKIE['lang'])) {
    // Set the language to the one stored in the cookie
    $selectedLang = $_COOKIE['lang'];
} else {
    // Default to English if no language preference is set
    $selectedLang = 'ru';
}

// Define label texts based on the selected language
if ($selectedLang == 'ru') {
    $label1 = 'Выберите валюту:';
    $label2 = 'USD';
    $label3 = 'EUR';
} elseif ($selectedLang == 'es') {
    $label1 = 'Seleccione una divisa:';
    $label2 = 'USD';
    $label3 = 'EUR';
} else {
    $label1 = 'Select Currency:';
    $label2 = 'USD';
    $label3 = 'EUR';
}
?>


<!-- Language form -->
<form action="#" method="post">
    <label for="lang">Язык:</label>
    <select name="lang" id="lang">
        <option value="ru" <?php if ($selectedLang == 'ru') echo 'selected'; ?>>Русский</option>
        <option value="en" <?php if ($selectedLang == 'en') echo 'selected'; ?>>English</option>
        <option value="es" <?php if ($selectedLang == 'es') echo 'selected'; ?>>Español</option>
    </select>
    <button type="submit">Save</button>
</form>

<!-- Currency form -->
<form action="">
    <label for="currency"><?php echo $label1; ?></label>
    <select name="currency" id="currency">
        <option value="rub">Руб</option>
        <option value="usd"><?php echo $label2; ?></option>
        <option value="eur"><?php echo $label3; ?></option>
    </select>
</form>
