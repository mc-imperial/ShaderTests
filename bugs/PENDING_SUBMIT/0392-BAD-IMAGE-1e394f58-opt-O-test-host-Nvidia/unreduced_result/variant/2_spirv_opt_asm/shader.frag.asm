; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 1747
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %13 %27
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %13 "_GLF_color"
               OpName %27 "gl_FragCoord"
               OpName %61 "buf0"
               OpMemberName %61 0 "injectionSwitch"
               OpName %63 ""
               OpName %732 "tex"
               OpDecorate %13 Location 0
               OpDecorate %27 BuiltIn FragCoord
               OpMemberDecorate %61 0 Offset 0
               OpDecorate %61 Block
               OpDecorate %63 DescriptorSet 0
               OpDecorate %63 Binding 0
               OpDecorate %732 RelaxedPrecision
               OpDecorate %732 DescriptorSet 0
               OpDecorate %732 Binding 1
               OpDecorate %733 RelaxedPrecision
               OpDecorate %735 RelaxedPrecision
               OpDecorate %745 RelaxedPrecision
               OpDecorate %746 RelaxedPrecision
               OpDecorate %841 RelaxedPrecision
               OpDecorate %842 RelaxedPrecision
               OpDecorate %1055 RelaxedPrecision
               OpDecorate %1056 RelaxedPrecision
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeBool
          %7 = OpConstantFalse %6
         %10 = OpTypeFloat 32
         %11 = OpTypeVector %10 4
         %12 = OpTypePointer Output %11
         %13 = OpVariable %12 Output
         %16 = OpConstant %10 -6.80000019
         %26 = OpTypePointer Input %11
         %27 = OpVariable %26 Input
         %28 = OpTypeInt 32 0
         %29 = OpConstant %28 0
         %30 = OpTypePointer Input %10
         %33 = OpConstant %10 0
         %51 = OpConstant %10 -0.200000003
         %52 = OpConstant %10 -28.9400005
         %53 = OpConstant %10 -1.5
         %54 = OpConstant %10 -600.786987
         %55 = OpConstantComposite %11 %51 %52 %53 %54
         %56 = OpTypeInt 32 1
         %60 = OpTypeVector %10 2
         %61 = OpTypeStruct %60
         %62 = OpTypePointer Uniform %61
         %63 = OpVariable %62 Uniform
         %64 = OpConstant %56 0
         %65 = OpTypePointer Uniform %10
         %68 = OpConstant %28 1
         %74 = OpConstant %10 -9446068
         %75 = OpConstant %10 -16704794
         %76 = OpConstant %10 -34168664
         %77 = OpConstant %10 -2996338.5
         %78 = OpConstantComposite %11 %74 %75 %76 %77
        %142 = OpConstant %10 0.5
        %155 = OpConstant %10 -0x1.8p+128
        %173 = OpConstant %10 109.643997
        %174 = OpConstant %10 8
        %175 = OpConstant %10 -2.4000001
        %176 = OpConstantComposite %11 %173 %174 %53 %175
        %186 = OpConstantTrue %6
        %219 = OpConstant %10 8523.42578
        %220 = OpConstant %10 157.830994
        %221 = OpConstant %10 -862.015991
        %222 = OpConstant %10 -9702.96777
        %223 = OpConstantComposite %11 %219 %220 %221 %222
        %229 = OpConstant %10 229.684006
        %230 = OpConstant %10 -25.4799995
        %231 = OpConstant %10 97.8119965
        %232 = OpConstant %10 6922.00732
        %233 = OpConstantComposite %11 %229 %230 %231 %232
        %266 = OpConstant %10 -7516.66699
        %267 = OpConstant %10 -8.19999981
        %268 = OpConstant %10 9607.04297
        %269 = OpConstant %10 -3.0999999
        %270 = OpConstantComposite %11 %266 %267 %268 %269
        %288 = OpConstant %10 1
        %306 = OpConstant %10 3
        %307 = OpConstant %10 -9.5
        %308 = OpConstant %10 9.30000019
        %309 = OpConstant %10 -8896.41602
        %310 = OpConstantComposite %11 %306 %307 %308 %309
        %318 = OpConstant %10 844.945984
        %319 = OpConstant %10 5168.95801
        %320 = OpConstant %10 6194.47754
        %321 = OpConstant %10 2.5999999
        %322 = OpConstantComposite %11 %318 %319 %320 %321
        %359 = OpTypeVector %6 2
        %373 = OpConstant %10 -8.30000019
        %377 = OpConstant %10 0.300000012
        %385 = OpConstant %10 1.54167557
        %386 = OpConstant %10 -1.31979358
        %387 = OpConstant %10 -1.55901968
        %388 = OpConstant %10 -1.46700394
        %389 = OpConstantComposite %11 %385 %386 %387 %388
        %395 = OpConstant %10 -0.800000012
        %396 = OpConstant %10 7.30000019
        %397 = OpConstant %10 -8.69999981
        %398 = OpConstantComposite %11 %373 %395 %396 %397
        %417 = OpConstantComposite %11 %155 %155 %155 %155
        %444 = OpConstant %10 -420.867004
        %445 = OpConstant %10 -980.328979
        %446 = OpConstant %10 -8110.93506
        %447 = OpConstant %10 -70.1600037
        %448 = OpConstantComposite %11 %444 %445 %446 %447
        %459 = OpConstant %10 0x1.8p+128
        %490 = OpConstant %10 -5622.32422
        %491 = OpConstant %10 -6955.00977
        %492 = OpConstant %10 7.0999999
        %493 = OpConstant %10 -7118.2832
        %494 = OpConstantComposite %11 %490 %491 %492 %493
        %495 = OpTypeVector %56 2
        %496 = OpConstant %56 -43000
        %497 = OpConstant %56 -58735
        %498 = OpConstantComposite %495 %496 %497
        %500 = OpConstant %10 602.883972
        %513 = OpConstant %10 0.00390625
        %514 = OpConstantComposite %60 %513 %513
        %522 = OpConstant %10 2.29999995
        %526 = OpConstant %10 -9.69999981
        %537 = OpConstant %10 2
        %538 = OpConstant %10 256
        %539 = OpConstant %10 6.30000019
        %552 = OpTypeMatrix %11 4
        %553 = OpConstantComposite %11 %288 %33 %33 %33
        %554 = OpConstantComposite %11 %33 %288 %33 %33
        %555 = OpConstantComposite %11 %33 %33 %288 %33
        %556 = OpConstantComposite %11 %33 %33 %33 %288
        %557 = OpConstantComposite %552 %553 %554 %555 %556
        %668 = OpConstantComposite %11 %33 %33 %33 %33
        %683 = OpConstantComposite %60 %288 %288
        %716 = OpConstant %10 3.4000001
        %727 = OpConstantComposite %11 %459 %459 %33 %33
        %729 = OpTypeImage %10 2D 0 0 0 1 Unknown
        %730 = OpTypeSampledImage %729
        %731 = OpTypePointer UniformConstant %730
        %732 = OpVariable %731 UniformConstant
        %791 = OpConstant %10 5.16572285
        %792 = OpConstant %10 8.94156456
        %793 = OpConstantComposite %11 %791 %792 %792 %792
        %816 = OpConstant %10 -66.3799973
        %817 = OpConstant %10 -19.1599998
        %818 = OpConstantComposite %11 %816 %817 %716 %526
        %823 = OpConstant %10 1304.71582
        %830 = OpConstant %10 -2.0999999
        %831 = OpConstant %10 -4063.97241
        %852 = OpConstant %56 32
        %874 = OpConstant %10 659.491028
        %875 = OpConstant %10 5.5
        %876 = OpConstantComposite %11 %16 %874 %875 %16
        %909 = OpConstant %10 -62.6100006
        %910 = OpConstant %10 -5.5
        %911 = OpConstant %10 3.0999999
        %912 = OpConstant %10 59.5600014
        %913 = OpConstantComposite %11 %909 %910 %911 %912
        %964 = OpConstant %10 -3.4000001
       %1136 = OpConstant %10 9.80000019
       %1138 = OpConstant %10 -6615.02393
       %1139 = OpConstant %10 -7855.19971
       %1140 = OpConstant %10 695.117981
       %1141 = OpConstantComposite %11 %1138 %1139 %142 %1140
       %1142 = OpConstant %10 -52.5359993
       %1143 = OpConstant %10 -66.8639984
       %1144 = OpConstant %10 31136.5117
       %1145 = OpConstant %10 143.279999
       %1146 = OpConstantComposite %11 %1142 %1143 %1144 %1145
       %1294 = OpConstant %10 0.990150094
       %1295 = OpConstant %10 0.99982661
       %1296 = OpConstantComposite %11 %1294 %288 %1295 %288
       %1475 = OpConstant %10 -865.687012
       %1476 = OpConstant %10 -7146.79346
       %1477 = OpConstant %10 -729.890015
       %1478 = OpConstant %10 58.7599983
       %1479 = OpConstantComposite %11 %1475 %1476 %1477 %1478
       %1489 = OpConstant %56 1
       %1668 = OpConstant %10 -869.39801
       %1669 = OpConstant %10 -72.7699966
       %1670 = OpConstant %10 -164.787994
       %1671 = OpConstantComposite %11 %1668 %1669 %377 %1670
       %1680 = OpConstant %10 -9382.77148
       %1681 = OpConstant %10 396.367004
       %1682 = OpConstant %10 -6.0999999
       %1683 = OpConstantComposite %11 %1680 %964 %1681 %1682
       %1698 = OpConstant %10 -8
       %1699 = OpConstant %10 19.4899998
       %1700 = OpConstantComposite %11 %1698 %1699 %522 %1136
       %1709 = OpConstant %10 0.03125
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %31 = OpAccessChain %30 %27 %29
         %32 = OpLoad %10 %31
         %34 = OpFOrdLessThan %6 %32 %33
               OpSelectionMerge %36 None
               OpBranchConditional %34 %35 %36
         %35 = OpLabel
               OpStore %13 %55
               OpBranch %36
         %36 = OpLabel
         %66 = OpAccessChain %65 %63 %64 %29
         %67 = OpLoad %10 %66
         %69 = OpAccessChain %65 %63 %64 %68
         %70 = OpLoad %10 %69
         %71 = OpFOrdGreaterThan %6 %67 %70
               OpSelectionMerge %73 None
               OpBranchConditional %71 %72 %73
         %72 = OpLabel
               OpStore %13 %78
               OpBranch %73
         %73 = OpLabel
        %168 = OpLogicalOr %6 %34 %7
        %169 = OpLogicalNot %6 %168
        %170 = OpLogicalNot %6 %169
               OpSelectionMerge %172 None
               OpBranchConditional %170 %171 %172
        %171 = OpLabel
               OpStore %13 %176
               OpBranch %172
        %172 = OpLabel
               OpSelectionMerge %218 None
               OpBranchConditional %34 %217 %218
        %217 = OpLabel
               OpStore %13 %223
               OpBranch %218
        %218 = OpLabel
               OpSelectionMerge %228 None
               OpBranchConditional %34 %227 %228
        %227 = OpLabel
               OpStore %13 %233
               OpBranch %228
        %228 = OpLabel
        %261 = OpAccessChain %30 %27 %68
        %262 = OpLoad %10 %261
        %263 = OpFOrdLessThan %6 %262 %33
               OpSelectionMerge %265 None
               OpBranchConditional %263 %264 %265
        %264 = OpLabel
               OpStore %13 %270
               OpBranch %265
        %265 = OpLabel
        %281 = OpFOrdLessThan %6 %67 %70
               OpSelectionMerge %283 None
               OpBranchConditional %281 %282 %283
        %282 = OpLabel
               OpBranch %283
        %283 = OpLabel
        %296 = OpPhi %6 %281 %265 %71 %282
               OpSelectionMerge %298 None
               OpBranchConditional %296 %297 %298
        %297 = OpLabel
               OpStore %13 %310
               OpBranch %298
        %298 = OpLabel
               OpSelectionMerge %317 None
               OpBranchConditional %71 %316 %317
        %316 = OpLabel
               OpStore %13 %322
               OpBranch %317
        %317 = OpLabel
               OpSelectionMerge %340 None
               OpBranchConditional %263 %339 %340
        %339 = OpLabel
               OpStore %13 %389
               OpSelectionMerge %394 None
               OpBranchConditional %34 %393 %394
        %393 = OpLabel
               OpStore %13 %398
               OpBranch %394
        %394 = OpLabel
               OpBranch %340
        %340 = OpLabel
               OpSelectionMerge %416 None
               OpBranchConditional %34 %415 %416
        %415 = OpLabel
               OpStore %13 %417
               OpSelectionMerge %443 None
               OpBranchConditional %71 %442 %443
        %442 = OpLabel
               OpStore %13 %448
               OpBranch %443
        %443 = OpLabel
               OpBranch %416
        %416 = OpLabel
               OpSelectionMerge %484 None
               OpBranchConditional %263 %483 %484
        %483 = OpLabel
               OpSelectionMerge %489 None
               OpBranchConditional %263 %488 %489
        %488 = OpLabel
               OpStore %13 %494
               OpBranch %489
        %489 = OpLabel
        %499 = OpBitcast %60 %498
        %501 = OpCompositeExtract %10 %499 0
        %502 = OpCompositeExtract %10 %499 1
        %503 = OpCompositeConstruct %11 %501 %502 %377 %500
               OpStore %13 %503
               OpBranch %484
        %484 = OpLabel
               OpSelectionMerge %549 None
               OpBranchConditional %34 %548 %551
        %551 = OpLabel
        %558 = OpLoad %11 %27
        %559 = OpMatrixTimesVector %11 %557 %558
               OpBranch %549
        %548 = OpLabel
        %550 = OpLoad %11 %13
               OpBranch %549
        %549 = OpLabel
       %1722 = OpPhi %11 %559 %551 %550 %548
        %577 = OpCompositeExtract %10 %1722 1
        %578 = OpFOrdLessThan %6 %577 %33
        %579 = OpSelect %10 %578 %539 %538
        %580 = OpExtInst %10 %1 FMax %579 %538
        %584 = OpSelect %10 %263 %539 %538
        %585 = OpExtInst %10 %1 FMax %584 %538
        %591 = OpExtInst %10 %1 FClamp %580 %585 %585
        %592 = OpFDiv %10 %537 %591
        %678 = OpLoad %11 %27
        %680 = OpExtInst %11 %1 FMax %678 %678
        %681 = OpVectorShuffle %60 %680 %680 0 1
        %682 = OpVectorTimesScalar %60 %681 %513
        %724 = OpLogicalOr %6 %71 %7
               OpSelectionMerge %726 None
               OpBranchConditional %724 %725 %726
        %725 = OpLabel
               OpStore %13 %727
               OpBranch %726
        %726 = OpLabel
        %733 = OpLoad %730 %732
        %735 = OpImageSampleImplicitLod %11 %733 %682
        %742 = OpExtInst %60 %1 FMax %682 %682
        %745 = OpImageSampleImplicitLod %11 %733 %742
        %746 = OpExtInst %11 %1 FClamp %735 %735 %745
        %776 = OpCompositeExtract %10 %746 1
        %779 = OpFSub %60 %682 %514
               OpSelectionMerge %790 None
               OpBranchConditional %34 %789 %790
        %789 = OpLabel
               OpStore %13 %793
               OpBranch %790
        %790 = OpLabel
               OpSelectionMerge %801 None
               OpBranchConditional %71 %800 %801
        %800 = OpLabel
               OpStore %13 %668
               OpBranch %801
        %801 = OpLabel
        %810 = OpFAdd %10 %776 %592
               OpSelectionMerge %815 None
               OpBranchConditional %34 %814 %815
        %814 = OpLabel
               OpStore %13 %818
               OpBranch %815
        %815 = OpLabel
        %828 = OpFOrdGreaterThanEqual %6 %262 %33
        %832 = OpSelect %10 %828 %830 %831
        %833 = OpCompositeConstruct %60 %823 %832
        %837 = OpCompositeConstruct %359 %186 %828
        %838 = OpSelect %60 %837 %683 %833
        %839 = OpFMul %60 %779 %838
        %840 = OpExtInst %60 %1 FMax %779 %839
        %841 = OpImageSampleImplicitLod %11 %733 %840
        %842 = OpCompositeExtract %10 %841 1
               OpBranch %843
        %843 = OpLabel
       %1739 = OpPhi %60 %779 %815 %858 %846
       %1732 = OpPhi %56 %64 %815 %1490 %846
       %1730 = OpPhi %10 %810 %815 %886 %846
       %1729 = OpPhi %10 %842 %815 %1056 %846
        %850 = OpFOrdLessThan %6 %1729 %1730
        %853 = OpSLessThan %6 %1732 %852
        %854 = OpLogicalAnd %6 %850 %853
               OpLoopMerge %845 %846 None
               OpBranchConditional %854 %844 %845
        %844 = OpLabel
        %858 = OpFSub %60 %1739 %514
               OpSelectionMerge %873 None
               OpBranchConditional %263 %872 %873
        %872 = OpLabel
               OpStore %13 %876
               OpBranch %873
        %873 = OpLabel
        %886 = OpFAdd %10 %1730 %592
               OpSelectionMerge %908 None
               OpBranchConditional %263 %907 %908
        %907 = OpLabel
               OpStore %13 %913
               OpBranch %908
        %908 = OpLabel
       %1055 = OpImageSampleImplicitLod %11 %733 %858
       %1056 = OpCompositeExtract %10 %1055 1
               OpSelectionMerge %1064 None
               OpBranchConditional %281 %1063 %1066
       %1066 = OpLabel
       %1071 = OpCompositeConstruct %11 %886 %397 %513 %513
               OpBranch %1064
       %1063 = OpLabel
               OpBranch %1064
       %1064 = OpLabel
       %1744 = OpPhi %11 %1071 %1066 %678 %1063
       %1073 = OpCompositeExtract %10 %1744 0
               OpSelectionMerge %1082 None
               OpBranchConditional %281 %1081 %1084
       %1084 = OpLabel
       %1089 = OpCompositeConstruct %11 %886 %397 %513 %513
               OpBranch %1082
       %1081 = OpLabel
               OpBranch %1082
       %1082 = OpLabel
       %1746 = OpPhi %11 %1089 %1084 %678 %1081
       %1091 = OpCompositeExtract %10 %1746 0
       %1094 = OpExtInst %10 %1 FMin %1073 %1091
       %1103 = OpExtInst %10 %1 Length %668
       %1104 = OpFOrdLessThan %6 %1094 %1103
               OpSelectionMerge %1106 None
               OpBranchConditional %1104 %1105 %1106
       %1105 = OpLabel
       %1131 = OpLogicalOr %6 %724 %7
               OpSelectionMerge %1133 None
               OpBranchConditional %1131 %1132 %1133
       %1132 = OpLabel
               OpStore %13 %1141
               OpBranch %1133
       %1133 = OpLabel
               OpStore %13 %1146
               OpBranch %1106
       %1106 = OpLabel
               OpSelectionMerge %1293 None
               OpBranchConditional %263 %1292 %1293
       %1292 = OpLabel
               OpStore %13 %1296
               OpBranch %1293
       %1293 = OpLabel
               OpSelectionMerge %1474 None
               OpBranchConditional %263 %1473 %1474
       %1473 = OpLabel
       %1480 = OpExtInst %11 %1 Cosh %1479
               OpStore %13 %1480
               OpBranch %1474
       %1474 = OpLabel
       %1490 = OpIAdd %56 %1732 %1489
               OpSelectionMerge %1667 None
               OpBranchConditional %263 %1666 %1667
       %1666 = OpLabel
               OpStore %13 %1671
               OpBranch %1667
       %1667 = OpLabel
               OpSelectionMerge %1679 None
               OpBranchConditional %71 %1678 %1679
       %1678 = OpLabel
               OpStore %13 %1683
               OpBranch %1679
       %1679 = OpLabel
               OpBranch %846
        %846 = OpLabel
               OpBranch %843
        %845 = OpLabel
               OpSelectionMerge %1697 None
               OpBranchConditional %71 %1696 %1697
       %1696 = OpLabel
               OpStore %13 %1700
               OpBranch %1697
       %1697 = OpLabel
       %1707 = OpISub %56 %1732 %64
       %1708 = OpConvertSToF %10 %1707
       %1710 = OpFMul %10 %1708 %1709
       %1715 = OpCompositeConstruct %11 %1710 %1710 %1710 %288
               OpStore %13 %1715
               OpReturn
               OpFunctionEnd
