/* eslint-disable react/prop-types */
import {
  Document,
  Text,
  Page,
  Image,
  StyleSheet,
  View,
} from "@react-pdf/renderer";
import Logo from "../../assets/Logo Negra.jpeg";

export const Clientpdf = ({ carrito }) => {
  const styles = StyleSheet.create({
    page: { backgroundColor: "#FFFFFF	" },
    section: {
      textAlign: "left",
      fontSize: 14,
      fontFamily: "Helvetica",
      marginLeft: 10,
    },
  });
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image src={Logo} />
        <View style={styles.section}>
          {carrito.map((product) => (
            <Text key={product.newProduct.id}>
              {product.newProduct.Name} - {product.quantity} - Total U$D{" "}
              {product.newProduct.Price * product.quantity}{" "}
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  );
};
