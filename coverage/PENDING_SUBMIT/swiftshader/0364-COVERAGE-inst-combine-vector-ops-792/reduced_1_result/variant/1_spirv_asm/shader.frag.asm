; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 599
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %178 %590
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 310
               OpName %4 "main"
               OpName %6 "doConvert("
               OpName %16 "computeColor(f1;vf2;"
               OpName %14 "c"
               OpName %15 "position"
               OpName %19 "defaultColor("
               OpName %26 "drawShape(vf2;vf2;vf3;"
               OpName %23 "pos"
               OpName %24 "square"
               OpName %25 "setting"
               OpName %32 "computePoint(mf22;"
               OpName %31 "rotationMatrix"
               OpName %36 "msb8"
               OpName %38 "temp"
               OpName %40 "b_b"
               OpName %45 "s_g"
               OpName %59 "h_r"
               OpName %84 "buf1"
               OpMemberName %84 0 "resolution"
               OpName %86 ""
               OpName %114 "msb8"
               OpName %121 "buf0"
               OpMemberName %121 0 "time"
               OpName %123 ""
               OpName %159 "GLF_live1gl_FragCoord"
               OpName %168 "_injected_loop_counter"
               OpName %178 "gl_FragCoord"
               OpName %201 "GLF_dead4k"
               OpName %242 "msb8"
               OpName %244 "c1"
               OpName %259 "c2"
               OpName %274 "c3"
               OpName %289 "c4"
               OpName %304 "c5"
               OpName %328 "param"
               OpName %329 "param"
               OpName %333 "c6"
               OpName %356 "param"
               OpName %357 "param"
               OpName %361 "c7"
               OpName %384 "param"
               OpName %385 "param"
               OpName %389 "c8"
               OpName %412 "param"
               OpName %413 "param"
               OpName %420 "msb8"
               OpName %421 "aspect"
               OpName %432 "position"
               OpName %440 "center"
               OpName %450 "result"
               OpName %452 "i"
               OpName %471 "d"
               OpName %512 "param"
               OpName %514 "param"
               OpName %515 "param"
               OpName %538 "msb8"
               OpName %539 "angle"
               OpName %545 "rotationMatrix"
               OpName %558 "point1"
               OpName %559 "param"
               OpName %562 "rotationMatrix2"
               OpName %566 "point2"
               OpName %567 "param"
               OpName %570 "rotationMatrix3"
               OpName %576 "point3"
               OpName %577 "param"
               OpName %580 "mixed"
               OpName %590 "_GLF_color"
               OpMemberDecorate %84 0 Offset 0
               OpDecorate %84 Block
               OpDecorate %86 DescriptorSet 0
               OpDecorate %86 Binding 1
               OpDecorate %98 RelaxedPrecision
               OpMemberDecorate %121 0 Offset 0
               OpDecorate %121 Block
               OpDecorate %123 DescriptorSet 0
               OpDecorate %123 Binding 0
               OpDecorate %159 RelaxedPrecision
               OpDecorate %161 RelaxedPrecision
               OpDecorate %178 BuiltIn FragCoord
               OpDecorate %590 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %8 = OpTypeFloat 32
          %9 = OpTypePointer Function %8
         %10 = OpTypeVector %8 2
         %11 = OpTypePointer Function %10
         %12 = OpTypeVector %8 3
         %13 = OpTypeFunction %12 %9 %11
         %18 = OpTypeFunction %12
         %21 = OpTypePointer Function %12
         %22 = OpTypeFunction %12 %11 %11 %21
         %28 = OpTypeMatrix %10 2
         %29 = OpTypePointer Function %28
         %30 = OpTypeFunction %12 %29
         %34 = OpTypeInt 32 1
         %35 = OpTypePointer Function %34
         %37 = OpConstant %34 256
         %39 = OpTypePointer Private %8
         %40 = OpVariable %39 Private
         %45 = OpVariable %39 Private
         %58 = OpConstant %8 6
         %59 = OpVariable %39 Private
         %61 = OpConstant %34 0
         %67 = OpConstant %8 2
         %69 = OpConstant %8 3
         %84 = OpTypeStruct %10
         %85 = OpTypePointer Uniform %84
         %86 = OpVariable %85 Uniform
         %87 = OpTypeInt 32 0
         %88 = OpConstant %87 0
         %89 = OpTypePointer Uniform %8
        %108 = OpConstant %87 1
        %111 = OpConstant %87 2
        %120 = OpConstant %8 0.5
        %121 = OpTypeStruct %8
        %122 = OpTypePointer Uniform %121
        %123 = OpVariable %122 Uniform
        %153 = OpTypeBool
        %157 = OpTypeVector %8 4
        %158 = OpTypePointer Private %157
        %159 = OpVariable %158 Private
        %163 = OpConstant %34 150
        %169 = OpConstant %34 1
        %177 = OpTypePointer Input %157
        %178 = OpVariable %177 Input
        %179 = OpTypePointer Input %8
        %182 = OpConstant %8 0
        %188 = OpConstant %8 1
        %207 = OpConstantTrue %153
        %243 = OpTypePointer Function %153
        %322 = OpConstant %8 5
        %422 = OpTypePointer Uniform %10
        %441 = OpConstantComposite %10 %120 %120
        %451 = OpConstantComposite %12 %182 %182 %182
        %453 = OpConstant %34 35
        %478 = OpConstant %8 10
        %485 = OpConstant %8 4
        %498 = OpConstant %8 0.00999999978
        %501 = OpConstant %8 100
        %543 = OpConstant %8 0.100000001
        %583 = OpConstant %8 0.300000012
        %584 = OpConstantComposite %12 %583 %583 %583
        %589 = OpTypePointer Output %157
        %590 = OpVariable %589 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
        %538 = OpVariable %35 Function
        %539 = OpVariable %9 Function
        %545 = OpVariable %29 Function
        %558 = OpVariable %21 Function
        %559 = OpVariable %29 Function
        %562 = OpVariable %29 Function
        %566 = OpVariable %21 Function
        %567 = OpVariable %29 Function
        %570 = OpVariable %29 Function
        %576 = OpVariable %21 Function
        %577 = OpVariable %29 Function
        %580 = OpVariable %21 Function
               OpStore %538 %37
        %540 = OpAccessChain %89 %123 %61
        %541 = OpLoad %8 %540
        %542 = OpExtInst %8 %1 Sin %541
        %544 = OpFMul %8 %542 %543
               OpStore %539 %544
        %546 = OpLoad %8 %539
        %547 = OpExtInst %8 %1 Sin %546
        %548 = OpLoad %8 %539
        %549 = OpExtInst %8 %1 Cos %548
        %550 = OpFNegate %8 %549
        %551 = OpLoad %8 %539
        %552 = OpExtInst %8 %1 Cos %551
        %553 = OpLoad %8 %539
        %554 = OpExtInst %8 %1 Sin %553
        %555 = OpCompositeConstruct %10 %547 %550
        %556 = OpCompositeConstruct %10 %552 %554
        %557 = OpCompositeConstruct %28 %555 %556
               OpStore %545 %557
        %560 = OpLoad %28 %545
               OpStore %559 %560
        %561 = OpFunctionCall %12 %32 %559
               OpStore %558 %561
        %563 = OpLoad %28 %545
        %564 = OpLoad %28 %545
        %565 = OpMatrixTimesMatrix %28 %563 %564
               OpStore %562 %565
        %568 = OpLoad %28 %562
               OpStore %567 %568
        %569 = OpFunctionCall %12 %32 %567
               OpStore %566 %569
        %571 = OpLoad %28 %545
        %572 = OpLoad %28 %545
        %573 = OpMatrixTimesMatrix %28 %571 %572
        %574 = OpLoad %28 %545
        %575 = OpMatrixTimesMatrix %28 %573 %574
               OpStore %570 %575
        %578 = OpLoad %28 %570
               OpStore %577 %578
        %579 = OpFunctionCall %12 %32 %577
               OpStore %576 %579
        %581 = OpLoad %12 %558
        %582 = OpLoad %12 %566
        %585 = OpExtInst %12 %1 FMix %581 %582 %584
               OpStore %580 %585
        %586 = OpLoad %12 %580
        %587 = OpLoad %12 %576
        %588 = OpExtInst %12 %1 FMix %586 %587 %584
               OpStore %580 %588
        %591 = OpLoad %12 %580
        %592 = OpLoad %34 %538
        %593 = OpBitCount %34 %592
        %594 = OpConvertSToF %8 %593
        %595 = OpCompositeExtract %8 %591 0
        %596 = OpCompositeExtract %8 %591 1
        %597 = OpCompositeExtract %8 %591 2
        %598 = OpCompositeConstruct %157 %595 %596 %597 %594
               OpStore %590 %598
               OpReturn
               OpFunctionEnd
          %6 = OpFunction %2 None %3
          %7 = OpLabel
         %36 = OpVariable %35 Function
         %38 = OpVariable %21 Function
               OpStore %36 %37
         %41 = OpLoad %8 %40
         %42 = OpLoad %34 %36
         %43 = OpBitCount %34 %42
         %44 = OpConvertSToF %8 %43
         %46 = OpLoad %8 %45
         %47 = OpFSub %8 %44 %46
         %48 = OpFMul %8 %41 %47
         %49 = OpLoad %8 %40
         %50 = OpLoad %8 %40
         %51 = OpLoad %34 %36
         %52 = OpBitCount %34 %51
         %53 = OpConvertSToF %8 %52
         %54 = OpLoad %8 %45
         %55 = OpFSub %8 %53 %54
         %56 = OpFMul %8 %50 %55
         %57 = OpFSub %8 %49 %56
         %60 = OpLoad %8 %59
         %62 = OpBitReverse %34 %61
         %63 = OpConvertSToF %8 %62
         %64 = OpLoad %34 %36
         %65 = OpBitCount %34 %64
         %66 = OpConvertSToF %8 %65
         %68 = OpCompositeConstruct %12 %63 %66 %67
         %70 = OpCompositeConstruct %12 %69 %69 %69
         %71 = OpFDiv %12 %68 %70
         %72 = OpCompositeConstruct %12 %60 %60 %60
         %73 = OpFSub %12 %72 %71
         %74 = OpVectorTimesScalar %12 %73 %58
         %75 = OpExtInst %12 %1 FAbs %74
         %76 = OpCompositeConstruct %12 %69 %69 %69
         %77 = OpFSub %12 %75 %76
         %78 = OpExtInst %12 %1 FAbs %77
         %79 = OpLoad %34 %36
         %80 = OpBitCount %34 %79
         %81 = OpConvertSToF %8 %80
         %82 = OpCompositeConstruct %12 %81 %81 %81
         %83 = OpFSub %12 %78 %82
         %90 = OpAccessChain %89 %86 %61 %88
         %91 = OpLoad %8 %90
         %92 = OpConvertFToS %34 %91
         %93 = OpBitFieldSExtract %34 %92 %61 %61
         %94 = OpConvertSToF %8 %93
         %95 = OpAccessChain %89 %86 %61 %88
         %96 = OpLoad %8 %95
         %97 = OpConvertFToS %34 %96
         %98 = OpBitCount %34 %97
         %99 = OpConvertSToF %8 %98
        %100 = OpCompositeConstruct %12 %94 %94 %94
        %101 = OpCompositeConstruct %12 %99 %99 %99
        %102 = OpExtInst %12 %1 FClamp %83 %100 %101
        %103 = OpVectorTimesScalar %12 %102 %57
        %104 = OpCompositeConstruct %12 %48 %48 %48
        %105 = OpFAdd %12 %104 %103
               OpStore %38 %105
        %106 = OpAccessChain %9 %38 %88
        %107 = OpLoad %8 %106
               OpStore %59 %107
        %109 = OpAccessChain %9 %38 %108
        %110 = OpLoad %8 %109
               OpStore %45 %110
        %112 = OpAccessChain %9 %38 %111
        %113 = OpLoad %8 %112
               OpStore %40 %113
               OpReturn
               OpFunctionEnd
         %16 = OpFunction %12 None %13
         %14 = OpFunctionParameter %9
         %15 = OpFunctionParameter %11
         %17 = OpLabel
        %114 = OpVariable %35 Function
        %168 = OpVariable %35 Function
        %201 = OpVariable %35 Function
               OpStore %114 %37
        %115 = OpLoad %8 %14
        %116 = OpExtInst %8 %1 Fract %115
               OpStore %59 %116
        %117 = OpLoad %34 %114
        %118 = OpBitCount %34 %117
        %119 = OpConvertSToF %8 %118
               OpStore %45 %119
        %124 = OpAccessChain %89 %123 %61
        %125 = OpLoad %8 %124
        %126 = OpExtInst %8 %1 Sin %125
        %127 = OpFMul %8 %126 %120
        %128 = OpFAdd %8 %127 %120
        %129 = OpFAdd %8 %120 %128
               OpStore %40 %129
        %130 = OpFunctionCall %2 %6
        %131 = OpLoad %34 %114
        %132 = OpBitCount %34 %131
        %133 = OpConvertSToF %8 %132
        %134 = OpAccessChain %9 %15 %108
        %135 = OpLoad %8 %134
        %136 = OpFDiv %8 %133 %135
        %137 = OpLoad %8 %45
        %138 = OpFMul %8 %137 %136
               OpStore %45 %138
        %139 = OpLoad %34 %114
        %140 = OpBitCount %34 %139
        %141 = OpConvertSToF %8 %140
        %142 = OpAccessChain %9 %15 %88
        %143 = OpLoad %8 %142
        %144 = OpFDiv %8 %141 %143
        %145 = OpLoad %8 %59
        %146 = OpFMul %8 %145 %144
               OpStore %59 %146
        %147 = OpAccessChain %9 %15 %108
        %148 = OpLoad %8 %147
        %149 = OpAccessChain %9 %15 %88
        %150 = OpLoad %8 %149
        %151 = OpFSub %8 %148 %150
        %152 = OpExtInst %8 %1 FAbs %151
        %154 = OpFOrdLessThan %153 %152 %120
               OpSelectionMerge %156 None
               OpBranchConditional %154 %155 %156
        %155 = OpLabel
        %160 = OpAccessChain %39 %159 %108
        %161 = OpLoad %8 %160
        %162 = OpConvertFToS %34 %161
        %164 = OpSLessThan %153 %162 %163
               OpSelectionMerge %166 None
               OpBranchConditional %164 %165 %167
        %165 = OpLabel
               OpBranch %166
        %167 = OpLabel
               OpStore %168 %169
               OpBranch %170
        %170 = OpLabel
               OpLoopMerge %172 %173 None
               OpBranch %174
        %174 = OpLabel
        %175 = OpLoad %34 %168
        %176 = OpINotEqual %153 %175 %61
               OpBranchConditional %176 %171 %172
        %171 = OpLabel
        %180 = OpAccessChain %179 %178 %88
        %181 = OpLoad %8 %180
        %183 = OpFOrdLessThan %153 %181 %182
               OpSelectionMerge %185 None
               OpBranchConditional %183 %184 %185
        %184 = OpLabel
        %186 = OpLoad %8 %14
        %187 = OpDPdy %8 %186
        %189 = OpFOrdLessThanEqual %153 %187 %188
               OpSelectionMerge %191 None
               OpBranchConditional %189 %190 %191
        %190 = OpLabel
        %192 = OpLoad %8 %14
        %193 = OpFAdd %8 %192 %188
               OpStore %14 %193
               OpBranch %191
        %191 = OpLabel
               OpBranch %185
        %185 = OpLabel
               OpBranch %173
        %173 = OpLabel
        %194 = OpLoad %34 %168
        %195 = OpISub %34 %194 %169
               OpStore %168 %195
               OpBranch %170
        %172 = OpLabel
        %196 = OpAccessChain %179 %178 %88
        %197 = OpLoad %8 %196
        %198 = OpFOrdLessThan %153 %197 %182
               OpSelectionMerge %200 None
               OpBranchConditional %198 %199 %200
        %199 = OpLabel
               OpStore %201 %169
               OpBranch %202
        %202 = OpLabel
               OpLoopMerge %204 %205 None
               OpBranch %206
        %206 = OpLabel
               OpBranchConditional %207 %203 %204
        %203 = OpLabel
        %208 = OpLoad %8 %14
        %209 = OpFOrdGreaterThan %153 %208 %188
               OpSelectionMerge %211 None
               OpBranchConditional %209 %210 %211
        %210 = OpLabel
               OpBranch %204
        %211 = OpLabel
               OpStore %59 %188
               OpBranch %205
        %205 = OpLabel
               OpBranch %202
        %204 = OpLabel
               OpBranch %200
        %200 = OpLabel
               OpBranch %166
        %166 = OpLabel
        %213 = OpAccessChain %89 %86 %61 %88
        %214 = OpLoad %8 %213
        %215 = OpConvertFToS %34 %214
        %216 = OpBitFieldSExtract %34 %215 %61 %61
        %217 = OpConvertSToF %8 %216
        %218 = OpLoad %34 %114
        %219 = OpBitCount %34 %218
        %220 = OpConvertSToF %8 %219
        %221 = OpLoad %8 %40
        %222 = OpLoad %34 %114
        %223 = OpBitCount %34 %222
        %224 = OpConvertSToF %8 %223
        %225 = OpFMul %8 %221 %224
        %226 = OpFMul %8 %225 %69
        %227 = OpExtInst %8 %1 FClamp %217 %220 %226
               OpStore %40 %227
               OpBranch %156
        %156 = OpLabel
        %228 = OpLoad %8 %59
        %229 = OpLoad %8 %45
        %230 = OpLoad %8 %40
        %231 = OpCompositeConstruct %12 %228 %229 %230
               OpReturnValue %231
               OpFunctionEnd
         %19 = OpFunction %12 None %18
         %20 = OpLabel
        %234 = OpAccessChain %89 %86 %61 %108
        %235 = OpLoad %8 %234
        %236 = OpConvertFToS %34 %235
        %237 = OpBitFieldSExtract %34 %236 %61 %61
        %238 = OpConvertSToF %8 %237
        %239 = OpCompositeConstruct %12 %238 %238 %238
               OpReturnValue %239
               OpFunctionEnd
         %26 = OpFunction %12 None %22
         %23 = OpFunctionParameter %11
         %24 = OpFunctionParameter %11
         %25 = OpFunctionParameter %21
         %27 = OpLabel
        %242 = OpVariable %35 Function
        %244 = OpVariable %243 Function
        %259 = OpVariable %243 Function
        %274 = OpVariable %243 Function
        %289 = OpVariable %243 Function
        %304 = OpVariable %243 Function
        %328 = OpVariable %9 Function
        %329 = OpVariable %11 Function
        %333 = OpVariable %243 Function
        %356 = OpVariable %9 Function
        %357 = OpVariable %11 Function
        %361 = OpVariable %243 Function
        %384 = OpVariable %9 Function
        %385 = OpVariable %11 Function
        %389 = OpVariable %243 Function
        %412 = OpVariable %9 Function
        %413 = OpVariable %11 Function
               OpStore %242 %37
        %245 = OpAccessChain %9 %23 %88
        %246 = OpLoad %8 %245
        %247 = OpAccessChain %9 %25 %88
        %248 = OpLoad %8 %247
        %249 = OpFSub %8 %246 %248
        %250 = OpAccessChain %9 %24 %88
        %251 = OpLoad %8 %250
        %252 = OpFOrdLessThan %153 %249 %251
               OpStore %244 %252
        %253 = OpLoad %153 %244
        %254 = OpLogicalNot %153 %253
               OpSelectionMerge %256 None
               OpBranchConditional %254 %255 %256
        %255 = OpLabel
        %257 = OpFunctionCall %12 %19
               OpReturnValue %257
        %256 = OpLabel
        %260 = OpAccessChain %9 %23 %88
        %261 = OpLoad %8 %260
        %262 = OpAccessChain %9 %25 %88
        %263 = OpLoad %8 %262
        %264 = OpFAdd %8 %261 %263
        %265 = OpAccessChain %9 %24 %88
        %266 = OpLoad %8 %265
        %267 = OpFOrdGreaterThan %153 %264 %266
               OpStore %259 %267
        %268 = OpLoad %153 %259
        %269 = OpLogicalNot %153 %268
               OpSelectionMerge %271 None
               OpBranchConditional %269 %270 %271
        %270 = OpLabel
        %272 = OpFunctionCall %12 %19
               OpReturnValue %272
        %271 = OpLabel
        %275 = OpAccessChain %9 %23 %108
        %276 = OpLoad %8 %275
        %277 = OpAccessChain %9 %25 %88
        %278 = OpLoad %8 %277
        %279 = OpFSub %8 %276 %278
        %280 = OpAccessChain %9 %24 %108
        %281 = OpLoad %8 %280
        %282 = OpFOrdLessThan %153 %279 %281
               OpStore %274 %282
        %283 = OpLoad %153 %274
        %284 = OpLogicalNot %153 %283
               OpSelectionMerge %286 None
               OpBranchConditional %284 %285 %286
        %285 = OpLabel
        %287 = OpFunctionCall %12 %19
               OpReturnValue %287
        %286 = OpLabel
        %290 = OpAccessChain %9 %23 %108
        %291 = OpLoad %8 %290
        %292 = OpAccessChain %9 %25 %88
        %293 = OpLoad %8 %292
        %294 = OpFAdd %8 %291 %293
        %295 = OpAccessChain %9 %24 %108
        %296 = OpLoad %8 %295
        %297 = OpFOrdGreaterThan %153 %294 %296
               OpStore %289 %297
        %298 = OpLoad %153 %289
        %299 = OpLogicalNot %153 %298
               OpSelectionMerge %301 None
               OpBranchConditional %299 %300 %301
        %300 = OpLabel
        %302 = OpFunctionCall %12 %19
               OpReturnValue %302
        %301 = OpLabel
        %305 = OpAccessChain %9 %23 %88
        %306 = OpLoad %8 %305
        %307 = OpAccessChain %9 %25 %88
        %308 = OpLoad %8 %307
        %309 = OpAccessChain %9 %25 %108
        %310 = OpLoad %8 %309
        %311 = OpFSub %8 %308 %310
        %312 = OpFSub %8 %306 %311
        %313 = OpAccessChain %9 %24 %88
        %314 = OpLoad %8 %313
        %315 = OpFOrdLessThan %153 %312 %314
               OpStore %304 %315
        %316 = OpLoad %153 %304
        %317 = OpLogicalNot %153 %316
               OpSelectionMerge %319 None
               OpBranchConditional %317 %318 %319
        %318 = OpLabel
        %320 = OpAccessChain %9 %25 %111
        %321 = OpLoad %8 %320
        %323 = OpLoad %34 %242
        %324 = OpExtInst %34 %1 FindSMsb %323
        %325 = OpConvertSToF %8 %324
        %326 = OpFMul %8 %322 %325
        %327 = OpFDiv %8 %321 %326
               OpStore %328 %327
        %330 = OpLoad %10 %23
               OpStore %329 %330
        %331 = OpFunctionCall %12 %16 %328 %329
               OpReturnValue %331
        %319 = OpLabel
        %334 = OpAccessChain %9 %23 %88
        %335 = OpLoad %8 %334
        %336 = OpAccessChain %9 %25 %88
        %337 = OpLoad %8 %336
        %338 = OpAccessChain %9 %25 %108
        %339 = OpLoad %8 %338
        %340 = OpFSub %8 %337 %339
        %341 = OpFAdd %8 %335 %340
        %342 = OpAccessChain %9 %24 %88
        %343 = OpLoad %8 %342
        %344 = OpFOrdGreaterThan %153 %341 %343
               OpStore %333 %344
        %345 = OpLoad %153 %333
        %346 = OpLogicalNot %153 %345
               OpSelectionMerge %348 None
               OpBranchConditional %346 %347 %348
        %347 = OpLabel
        %349 = OpAccessChain %9 %25 %111
        %350 = OpLoad %8 %349
        %351 = OpLoad %34 %242
        %352 = OpExtInst %34 %1 FindSMsb %351
        %353 = OpConvertSToF %8 %352
        %354 = OpFMul %8 %322 %353
        %355 = OpFDiv %8 %350 %354
               OpStore %356 %355
        %358 = OpLoad %10 %23
               OpStore %357 %358
        %359 = OpFunctionCall %12 %16 %356 %357
               OpReturnValue %359
        %348 = OpLabel
        %362 = OpAccessChain %9 %23 %108
        %363 = OpLoad %8 %362
        %364 = OpAccessChain %9 %25 %88
        %365 = OpLoad %8 %364
        %366 = OpAccessChain %9 %25 %108
        %367 = OpLoad %8 %366
        %368 = OpFSub %8 %365 %367
        %369 = OpFSub %8 %363 %368
        %370 = OpAccessChain %9 %24 %108
        %371 = OpLoad %8 %370
        %372 = OpFOrdLessThan %153 %369 %371
               OpStore %361 %372
        %373 = OpLoad %153 %361
        %374 = OpLogicalNot %153 %373
               OpSelectionMerge %376 None
               OpBranchConditional %374 %375 %376
        %375 = OpLabel
        %377 = OpAccessChain %9 %25 %111
        %378 = OpLoad %8 %377
        %379 = OpLoad %34 %242
        %380 = OpExtInst %34 %1 FindSMsb %379
        %381 = OpConvertSToF %8 %380
        %382 = OpFMul %8 %322 %381
        %383 = OpFDiv %8 %378 %382
               OpStore %384 %383
        %386 = OpLoad %10 %23
               OpStore %385 %386
        %387 = OpFunctionCall %12 %16 %384 %385
               OpReturnValue %387
        %376 = OpLabel
        %390 = OpAccessChain %9 %23 %108
        %391 = OpLoad %8 %390
        %392 = OpAccessChain %9 %25 %88
        %393 = OpLoad %8 %392
        %394 = OpAccessChain %9 %25 %108
        %395 = OpLoad %8 %394
        %396 = OpFSub %8 %393 %395
        %397 = OpFAdd %8 %391 %396
        %398 = OpAccessChain %9 %24 %108
        %399 = OpLoad %8 %398
        %400 = OpFOrdGreaterThan %153 %397 %399
               OpStore %389 %400
        %401 = OpLoad %153 %389
        %402 = OpLogicalNot %153 %401
               OpSelectionMerge %404 None
               OpBranchConditional %402 %403 %404
        %403 = OpLabel
        %405 = OpAccessChain %9 %25 %111
        %406 = OpLoad %8 %405
        %407 = OpLoad %34 %242
        %408 = OpExtInst %34 %1 FindSMsb %407
        %409 = OpConvertSToF %8 %408
        %410 = OpFMul %8 %322 %409
        %411 = OpFDiv %8 %406 %410
               OpStore %412 %411
        %414 = OpLoad %10 %23
               OpStore %413 %414
        %415 = OpFunctionCall %12 %16 %412 %413
               OpReturnValue %415
        %404 = OpLabel
        %417 = OpFunctionCall %12 %19
               OpReturnValue %417
               OpFunctionEnd
         %32 = OpFunction %12 None %30
         %31 = OpFunctionParameter %29
         %33 = OpLabel
        %420 = OpVariable %35 Function
        %421 = OpVariable %11 Function
        %432 = OpVariable %11 Function
        %440 = OpVariable %11 Function
        %450 = OpVariable %21 Function
        %452 = OpVariable %35 Function
        %471 = OpVariable %21 Function
        %512 = OpVariable %11 Function
        %514 = OpVariable %11 Function
        %515 = OpVariable %21 Function
               OpStore %420 %37
        %423 = OpAccessChain %422 %86 %61
        %424 = OpLoad %10 %423
        %425 = OpAccessChain %89 %86 %61 %88
        %426 = OpLoad %8 %425
        %427 = OpAccessChain %89 %86 %61 %108
        %428 = OpLoad %8 %427
        %429 = OpExtInst %8 %1 FMin %426 %428
        %430 = OpCompositeConstruct %10 %429 %429
        %431 = OpFDiv %10 %424 %430
               OpStore %421 %431
        %433 = OpLoad %157 %178
        %434 = OpVectorShuffle %10 %433 %433 0 1
        %435 = OpAccessChain %422 %86 %61
        %436 = OpLoad %10 %435
        %437 = OpFDiv %10 %434 %436
        %438 = OpLoad %10 %421
        %439 = OpFMul %10 %437 %438
               OpStore %432 %439
        %442 = OpLoad %10 %421
        %443 = OpFMul %10 %441 %442
               OpStore %440 %443
        %444 = OpLoad %28 %31
        %445 = OpLoad %10 %432
        %446 = OpVectorTimesMatrix %10 %445 %444
               OpStore %432 %446
        %447 = OpLoad %28 %31
        %448 = OpLoad %10 %440
        %449 = OpVectorTimesMatrix %10 %448 %447
               OpStore %440 %449
               OpStore %450 %451
        %454 = OpAccessChain %89 %86 %61 %88
        %455 = OpLoad %8 %454
        %456 = OpConvertFToS %34 %455
        %457 = OpBitFieldSExtract %34 %456 %61 %61
        %458 = OpBitFieldInsert %34 %453 %61 %61 %457
               OpStore %452 %458
               OpBranch %459
        %459 = OpLabel
               OpLoopMerge %461 %462 None
               OpBranch %463
        %463 = OpLabel
        %464 = OpLoad %34 %452
        %465 = OpAccessChain %89 %86 %61 %88
        %466 = OpLoad %8 %465
        %467 = OpConvertFToS %34 %466
        %468 = OpBitFieldSExtract %34 %467 %61 %61
        %469 = OpBitReverse %34 %468
        %470 = OpSGreaterThanEqual %153 %464 %469
               OpBranchConditional %470 %460 %461
        %460 = OpLabel
        %472 = OpLoad %10 %440
        %473 = OpLoad %34 %452
        %474 = OpConvertSToF %8 %473
        %475 = OpLoad %34 %420
        %476 = OpBitCount %34 %475
        %477 = OpConvertSToF %8 %476
        %479 = OpFMul %8 %477 %478
        %480 = OpFDiv %8 %474 %479
        %481 = OpAccessChain %89 %123 %61
        %482 = OpLoad %8 %481
        %483 = OpFAdd %8 %480 %482
        %484 = OpExtInst %8 %1 Sin %483
        %486 = OpFDiv %8 %484 %485
        %487 = OpLoad %34 %420
        %488 = OpBitCount %34 %487
        %489 = OpConvertSToF %8 %488
        %490 = OpFMul %8 %486 %489
        %491 = OpAccessChain %89 %86 %61 %88
        %492 = OpLoad %8 %491
        %493 = OpConvertFToS %34 %492
        %494 = OpBitFieldSExtract %34 %493 %61 %61
        %495 = OpConvertSToF %8 %494
        %496 = OpCompositeConstruct %10 %490 %495
        %497 = OpFAdd %10 %472 %496
        %499 = OpLoad %34 %452
        %500 = OpConvertSToF %8 %499
        %502 = OpFDiv %8 %500 %501
        %503 = OpLoad %34 %420
        %504 = OpBitCount %34 %503
        %505 = OpConvertSToF %8 %504
        %506 = OpFMul %8 %502 %505
        %507 = OpExtInst %8 %1 Sin %506
        %508 = OpFAdd %8 %498 %507
        %509 = OpLoad %34 %452
        %510 = OpConvertSToF %8 %509
        %511 = OpCompositeConstruct %12 %508 %498 %510
        %513 = OpLoad %10 %432
               OpStore %512 %513
               OpStore %514 %497
               OpStore %515 %511
        %516 = OpFunctionCall %12 %26 %512 %514 %515
               OpStore %471 %516
        %517 = OpLoad %12 %471
        %518 = OpExtInst %8 %1 Length %517
        %519 = OpAccessChain %89 %86 %61 %88
        %520 = OpLoad %8 %519
        %521 = OpConvertFToS %34 %520
        %522 = OpBitFieldSExtract %34 %521 %61 %61
        %523 = OpConvertSToF %8 %522
        %524 = OpFOrdLessThanEqual %153 %518 %523
               OpSelectionMerge %526 None
               OpBranchConditional %524 %525 %526
        %525 = OpLabel
               OpBranch %462
        %526 = OpLabel
        %528 = OpLoad %12 %471
        %529 = OpCompositeExtract %8 %528 0
        %530 = OpCompositeExtract %8 %528 1
        %531 = OpCompositeExtract %8 %528 2
        %532 = OpCompositeConstruct %12 %529 %530 %531
               OpStore %450 %532
               OpBranch %462
        %462 = OpLabel
        %533 = OpLoad %34 %452
        %534 = OpISub %34 %533 %169
               OpStore %452 %534
               OpBranch %459
        %461 = OpLabel
        %535 = OpLoad %12 %450
               OpReturnValue %535
               OpFunctionEnd
