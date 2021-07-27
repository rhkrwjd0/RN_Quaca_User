import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import StyleCommon from '../../Style/StyleCommon';
import Styles from '../../Style/Style';

const styleCommon = StyleSheet.create(StyleCommon);
const styles = StyleSheet.create(Styles);
const OrderOption = (props) => {
  const orderMenu = props.orderMenu;
  const category =  props.category;
  console.log('orderMenu >>> ', orderMenu);
  console.log('category >>> ', category);

  const [selectOption, setSelectOption] = useState({
    // OptionA: category === "goods" ? "" : null,
    // OptionB: category === "drink" ? null : "",
    // OptionC: null,
    OptionA: (orderMenu.OptionA !== null && orderMenu.OptionA !== "") ? null : "",
    OptionB: (orderMenu.OptionB !== null && orderMenu.OptionB !== "") ? null : "",
    OptionC: (orderMenu.OptionC !== null && orderMenu.OptionC !== "") ? null : "",
  });

  // option 선택될 때 부모 option state 변경하기
  useEffect(() => {
    props.orderOptionFunc(selectOption);
  }, [selectOption]);

  const optionListBox = (option, list) => {
    // option 박스 width 구하기 (갯수 상관없이 넓이 차게 하려고..)
    const boxWidth = parseInt((100 - list.length) / list.length);

    return (
      <View style={[styleCommon.flexRow, styleCommon.alignItemC]}>
        {list.map((item, index) => (
            <>
              {index != 0 && <View style={styleCommon.btn3Line}></View> }
              <TouchableHighlight
                key={index}
                underlayColor=""
                style={styleCommon.btn3}
                onPress={() => {
                  setSelectOption({
                    ...selectOption,
                    [option]: item,
                  });
                }}
              >
                <Text style={
                    selectOption[option] === item ? styleCommon.btn3TxtActive : styleCommon.btn3Txt
                }>{item}</Text>
              </TouchableHighlight>
            </>
        ))}
    </View>
    );
  };

  return (
    <View style={styles.storeMenuPopOption}>
        {console.log(orderMenu.OptionA !== "", orderMenu.OptionB !== "", orderMenu.OptionC !== "")}
        {
          category === "drink" && (
            <>
              {orderMenu.OptionA !== null && orderMenu.OptionA !== "" &&
                <View style={styles.storeMenuPopOptionItem}>
                  <Text style={styles.storeMenuPopOptionTxt}>온도</Text>
                    {optionListBox('OptionA', orderMenu.OptionA.split(','))}
                </View>
              }
              {orderMenu.OptionB !== null && orderMenu.OptionB !== "" &&
                <View style={styles.storeMenuPopOptionItem}>
                  <Text style={styles.storeMenuPopOptionTxt}>컵 사이즈</Text>
                    {optionListBox('OptionB', orderMenu.OptionB.split(','))}
                </View>
              }
              {orderMenu.OptionC !== null && orderMenu.OptionC !== "" &&
                <View style={styles.storeMenuPopOptionItem}>
                  <Text style={styles.storeMenuPopOptionTxt}>컵 종류</Text>
                    {optionListBox('OptionC', orderMenu.OptionC.split(','))}
                </View>
              }
            </>
          ) ||
          category === "bread" && (
            <>
              {orderMenu.OptionA !== null && orderMenu.OptionA !== "" &&
                <View style={styles.storeMenuPopOptionItem}>
                  <Text style={styles.storeMenuPopOptionTxt}>온도</Text>
                    {optionListBox('OptionA', orderMenu.OptionA.split(','))}
                </View>
              }
              {orderMenu.OptionC !== null && orderMenu.OptionC !== "" &&
                <View style={styles.storeMenuPopOptionItem}>
                  <Text style={styles.storeMenuPopOptionTxt}>포장</Text>
                    {optionListBox('OptionC', orderMenu.OptionC.split(','))}
                </View>
              }
            </>
          ) ||
          category === "goods" && (
            <>
                {orderMenu.OptionC !== null && orderMenu.OptionC !== "" &&
                  <View style={styles.storeMenuPopOptionItem}>
                    <Text style={styles.storeMenuPopOptionTxt}>포장</Text>
                      {optionListBox('OptionC', orderMenu.OptionC.split(','))}
                  </View>
                }
            </>
          )
        }
    </View>




  );
};

export default OrderOption;
