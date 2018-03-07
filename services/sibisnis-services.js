module.exports = {
  'h2h-bayar': {
    pending: {
      "status": "pending",
      "errcode": 202,
      "remarks": "Accepted",
      "data": {
        "reff_id": "303180221000115"
      },
      "message": "Transaksi sedang diproses di operator. Mohon tunggu. Reff ID 303180221000115"
    },
    success: {
      "status": "success",
      "errcode": "200",
      "remarks": "OK",
      "data": {
        "kode_voucher": "A25",
        "potong_saldo": 25000,
        "operator": "TELKOMSEL",
        "nominal": 1000,
        "msisdn": "085946810870",
        "message": "Pembelian Telkomsel 25K 085946810870 BERHASIL!",
        "struk": "STRUK PEMBELIAN VOUCHER PRABAYAR|-|Tanggal: 2018-02-22 18:11|Nopel:085946810870|Provider:TELKOMSEL|Nomina: 1000|VSNN: 0427161252160154302|Status: BERHASIL||--------- TERIMA KASIH ---------",
        "sn": "0427161252160154302"
      },
      "message": ""
    }

  },
  'h2h-cek-pending': {
    pending: {
      "status": "success",
      "errcode": "200",
      "remarks": "OK",
      "data": {
        "status_trx": "pending",
        "vsn_trx": null
      },
      "message": ""
    },
    failed: {
      "status": "success",
      "errcode": "200",
      "remarks": "OK",
      "data": {
        "status_trx": "failed",
        "vsn_trx": null
      },
      "message": ""
    },
    refund: {
      "status": "success",
      "errcode": "200",
      "remarks": "OK",
      "data": {
        "status_trx": "refund",
        "vsn_trx": null
      },
      "message": ""
    },
    success: {
      "status": "success",
      "errcode": "200",
      "remarks": "OK",
      "data": {
        "status_trx": "success",
        "vsn_trx": "123223232424"
      },
      "message": ""
    }
  }
}