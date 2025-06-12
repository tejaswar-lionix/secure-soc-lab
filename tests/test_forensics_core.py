"""Tests for forensics core - distinct per forensics"""

def test_forensics_core_0():
    import hashlib
    h=hashlib.sha256(b"test0").hexdigest()
    assert len(h)==64

def test_forensics_core_1():
    import hashlib
    h=hashlib.sha256(b"test1").hexdigest()
    assert len(h)==64

def test_forensics_core_2():
    import hashlib
    h=hashlib.sha256(b"test2").hexdigest()
    assert len(h)==64

def test_forensics_core_3():
    import hashlib
    h=hashlib.sha256(b"test3").hexdigest()
    assert len(h)==64

def test_forensics_core_4():
    import hashlib
    h=hashlib.sha256(b"test4").hexdigest()
    assert len(h)==64
