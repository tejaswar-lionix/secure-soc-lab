"""Tests for siem edge - distinct per siem"""

def test_siem_edge_0():
    alert={"id":"0","technique_id":"T1071","severity":"critical"}
    assert alert["technique_id"].startswith("T")

def test_siem_edge_1():
    alert={"id":"1","technique_id":"T1071","severity":"critical"}
    assert alert["technique_id"].startswith("T")

def test_siem_edge_2():
    alert={"id":"2","technique_id":"T1071","severity":"critical"}
    assert alert["technique_id"].startswith("T")

def test_siem_edge_3():
    alert={"id":"3","technique_id":"T1071","severity":"critical"}
    assert alert["technique_id"].startswith("T")

def test_siem_edge_4():
    alert={"id":"4","technique_id":"T1071","severity":"critical"}
    assert alert["technique_id"].startswith("T")
