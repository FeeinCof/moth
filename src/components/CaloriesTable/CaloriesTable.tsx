import styles from "./CaloriesTable.module.css";
const CaloriesTable = () => {
  return (
    <figure className={styles.table}>
      <table>
        <tbody>
          <tr>
            <td>Typical Values (as prepared energy)</td>
            <td>Per 100mls</td>
            <td>Per can (125mls)</td>
          </tr>
          <tr>
            <td>Energy (kcal)</td>
            <td>132</td>
            <td>165</td>
          </tr>
          <tr>
            <td>Energy (kj)</td>
            <td>556</td>
            <td>689</td>
          </tr>
          <tr>
            <td>Fat (g)</td>
            <td>0.04</td>
            <td>0.05</td>
          </tr>
          <tr>
            <td>Of which is saturated (g)</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>Carbohydrates (g)</td>
            <td>11.60</td>
            <td>14.50</td>
          </tr>
          <tr>
            <td>Of which is Sugars (g)</td>
            <td>11.06</td>
            <td>13.83</td>
          </tr>
          <tr>
            <td>Protein (g)</td>
            <td>0.26</td>
            <td>0.33</td>
          </tr>
          <tr>
            <td>Sodium (mg)</td>
            <td>14.35</td>
            <td>17.94</td>
          </tr>
          <tr>
            <td>Salt</td>
            <td>0.04</td>
            <td>0.04</td>
          </tr>
          <tr>
            <td>Allergens</td>
            <td>May contain Barley</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>
    </figure>
  );
};

export default CaloriesTable;
