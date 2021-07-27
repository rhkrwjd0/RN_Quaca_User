import React, {useEffect, useContext, useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {getStoreInfo} from '../../Function/ApiAxios/Store';
import {PayMethod} from './changeKo';
import UrlContext from '../../Provider/UrlContext';
import Styles from '../../Style/Style';
import StyleCommon from '../../Style/StyleCommon';

const styles = StyleSheet.create(Styles);
const styleCommon = StyleSheet.create(StyleCommon);

const ReceiptDetail = (props) => {
    
    const _UrlContext = useContext(UrlContext)
    const payDetail = props.payDetail;
    const StoreId = props.StoreId;

    const [storeInfo, setStoreInfo] = useState([]);
    useEffect(() => {
        getStoreInfo(_UrlContext.url, StoreId)
        .then((resStore) => {
            setStoreInfo(resStore);
        })
        .catch((err) => {
            alert(err);
        });
    }, []);
    const renderItem = ({item}) => {
        return (
            <View style={styles.receiptDetailBoxLine}>
                <Text style={styles.receiptDetailTxt}>{item.MenuName}</Text>
                <View style={styleCommon.flexRow}>
                    <Text style={styles.receiptDetailNum}>{item.OrderCnt}</Text>
                    <Text style={styles.receiptDetailNum}>개</Text>
                    <Text style={[styles.receiptDetailNum, styles.receiptDetailNumMl]}>{item.Price != null && item.Price != "" ? item.Price.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0}</Text>
                    <Text style={styles.receiptDetailNum}>원</Text>
                </View>
            </View>
        );
      };

    return (

    <View style={styles.receiptDetail}>
        {/* 스타일확인용 임시태그 */}
        <View style={styles.receiptDetailLine}>
            <View style={styles.receiptDetailTitle}>
                <Text style={styles.receiptDetailTitleText}>{storeInfo.StoreName}</Text>
                <Text style={styles.receiptDetailTitleSubText}>[스마트오더 e-Receipt]</Text>
            </View>
            <View style={styles.receiptDetailInfoBox}>
                <Text style={styles.receiptDetailInfo}>주문번호 : {payDetail != null ? JSON.parse(payDetail.MenuList)[0].OrderNum : "000"}</Text>
                <Text style={styles.receiptDetailInfo}>{payDetail != null ? payDetail.PayCompleteTime.replace(/\-/gi,".") : "2020.01.01 01:00"}</Text>
            </View>
        </View>
        
        <View style={styles.receiptDetailLine}>
            {payDetail != null && (
                <FlatList
                    data={JSON.parse(payDetail.MenuList)}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            )} 
        </View>

        <View style={styles.receiptDetailLine}>
            <View style={styles.receiptDetailBox}>
                <View style={styles.receiptDetailBoxLine}>
                    <Text style={styles.receiptDetailTxt}>결재예정금액</Text>
                    <View style={styleCommon.flexRow}>
                    <Text style={styles.receiptDetailNum}>{payDetail != null ? payDetail.TotalPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "0"}</Text>
                    <Text style={styles.receiptDetailNum}>원</Text>
                    </View>
                </View>
                <View style={styles.receiptDetailBoxLine}>
                    <Text style={styles.receiptDetailTxt}>할인금액</Text>
                    <View style={styleCommon.flexRow}>
                    <Text style={styles.receiptDetailNum}>0</Text>
                    <Text style={styles.receiptDetailNum}>원</Text>
                    </View>
                </View>
            </View>
        </View>

        <View style={styles.receiptDetailLine}>
            <View style={[styles.receiptDetailBox, styles.receiptDetailFinalPay]}>
                <View style={styles.receiptDetailBoxLine}>
                    <Text style={styles.receiptDetailTxt}>최종결재금액(부가세 포함)</Text>
                    <View style={styleCommon.flexRow}>
                    <Text style={styles.receiptDetailFinalPayNum}>{payDetail != null ? payDetail.TotalPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "0"}</Text>
                    <Text style={styles.receiptDetailFinalPayNum}>원</Text>
                    </View>
                </View>
            </View>
        </View>

        <View >
            <View style={styles.receiptDetailBox}>
                <View style={styles.receiptDetailBoxLine}>
                    <Text style={styles.receiptDetailTxt}>{payDetail != null ? PayMethod[JSON.parse(payDetail.MenuList)[0].PayMethod] : "미정"}</Text>
                    <View style={styleCommon.flexRow}>
                    <Text style={styles.receiptDetailNum}>{payDetail != null ? payDetail.TotalPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "0"}</Text>
                    <Text style={styles.receiptDetailNum}>원</Text>
                    </View>
                </View>
                <View style={styles.receiptDetailBoxLine}>
                    <Text style={styles.receiptDetailTxt}>승인번호</Text>
                    <View style={styleCommon.flexRow}>
                    <Text style={styles.receiptDetailNum}>123456789</Text>
                    </View>
                </View>
            </View>
        </View>

        <View style={styles.receiptDetailFooter}>
            <Text style={styles.receiptDetailFooterText}>지점명 : 그린로점</Text>
            <Text style={styles.receiptDetailFooterText}>전남 나주시 그린로 379 상야1길 21 | T.061)332-9227</Text>
        </View>
        {/* //스타일확인용 임시태그 */}
    </View>

    );
}

export default ReceiptDetail;
