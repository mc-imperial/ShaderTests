; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 348
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %9 %17
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "_GLF_color"
               OpName %13 "tex"
               OpName %17 "gl_FragCoord"
               OpName %38 "buf_push"
               OpMemberName %38 0 "injectionSwitch"
               OpName %40 ""
               OpDecorate %9 Location 0
               OpDecorate %13 RelaxedPrecision
               OpDecorate %13 DescriptorSet 0
               OpDecorate %13 Binding 0
               OpDecorate %14 RelaxedPrecision
               OpDecorate %17 BuiltIn FragCoord
               OpMemberDecorate %38 0 Offset 0
               OpDecorate %38 Block
               OpDecorate %99 RelaxedPrecision
               OpDecorate %243 RelaxedPrecision
               OpDecorate %296 RelaxedPrecision
               OpDecorate %297 RelaxedPrecision
               OpDecorate %298 RelaxedPrecision
               OpDecorate %302 RelaxedPrecision
               OpDecorate %303 RelaxedPrecision
               OpDecorate %304 RelaxedPrecision
               OpDecorate %305 RelaxedPrecision
               OpDecorate %306 RelaxedPrecision
               OpDecorate %307 RelaxedPrecision
               OpDecorate %308 RelaxedPrecision
               OpDecorate %309 RelaxedPrecision
               OpDecorate %310 RelaxedPrecision
               OpDecorate %315 RelaxedPrecision
               OpDecorate %316 RelaxedPrecision
               OpDecorate %320 RelaxedPrecision
               OpDecorate %331 RelaxedPrecision
               OpDecorate %332 RelaxedPrecision
               OpDecorate %333 RelaxedPrecision
               OpDecorate %334 RelaxedPrecision
               OpDecorate %335 RelaxedPrecision
               OpDecorate %336 RelaxedPrecision
               OpDecorate %337 RelaxedPrecision
               OpDecorate %338 RelaxedPrecision
               OpDecorate %343 RelaxedPrecision
               OpDecorate %344 RelaxedPrecision
               OpDecorate %346 RelaxedPrecision
               OpDecorate %347 RelaxedPrecision
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Output %7
          %9 = OpVariable %8 Output
         %10 = OpTypeImage %6 2D 0 0 0 1 Unknown
         %11 = OpTypeSampledImage %10
         %12 = OpTypePointer UniformConstant %11
         %13 = OpVariable %12 UniformConstant
         %15 = OpConstant %6 -8136.45361
         %16 = OpTypePointer Input %7
         %17 = OpVariable %16 Input
         %18 = OpTypeInt 32 0
         %19 = OpConstant %18 1
         %20 = OpTypePointer Input %6
         %23 = OpTypeBool
         %24 = OpConstantTrue %23
         %25 = OpTypePointer Function %7
         %31 = OpTypeVector %6 3
         %32 = OpTypeMatrix %31 3
         %33 = OpConstant %6 0
         %34 = OpConstantComposite %31 %33 %33 %33
         %35 = OpConstantComposite %32 %34 %34 %34
         %36 = OpConstant %6 2.0999999
         %37 = OpTypeVector %6 2
         %38 = OpTypeStruct %37
         %39 = OpTypePointer PushConstant %38
         %40 = OpVariable %39 PushConstant
         %41 = OpTypeInt 32 1
         %42 = OpConstant %41 0
         %43 = OpConstant %18 0
         %44 = OpTypePointer PushConstant %6
         %47 = OpConstant %6 1
         %48 = OpTypeMatrix %31 4
         %55 = OpConstant %6 682.200989
         %56 = OpConstant %6 72096
         %57 = OpConstant %6 -973.133972
         %59 = OpConstant %6 -8973.75293
         %60 = OpConstant %6 1.29999995
         %61 = OpConstant %6 -5.80000019
         %62 = OpConstantComposite %7 %33 %59 %60 %61
         %63 = OpTypeVector %23 4
         %64 = OpConstantFalse %23
         %65 = OpConstantComposite %63 %64 %64 %24 %24
         %90 = OpConstantComposite %7 %33 %33 %33 %33
         %92 = OpConstant %18 2
         %93 = OpTypePointer Function %6
         %96 = OpConstant %18 3
        %102 = OpConstantComposite %7 %47 %47 %47 %47
        %108 = OpConstantComposite %7 %36 %55 %56 %57
        %113 = OpConstant %6 708.288025
        %114 = OpConstant %6 -5033.9541
        %115 = OpConstant %6 3.79999995
        %116 = OpConstant %6 -9.39999962
        %117 = OpConstantComposite %7 %113 %114 %115 %116
        %146 = OpTypeMatrix %7 4
        %152 = OpConstantComposite %7 %36 %55 %60 %61
        %170 = OpTypeMatrix %7 3
        %179 = OpConstant %6 786.281006
        %253 = OpTypeMatrix %7 2
        %261 = OpConstantComposite %253 %90 %90
        %274 = OpConstant %6 34.1399994
        %289 = OpConstant %6 -6405.97803
        %317 = OpConstant %6 -271.161011
        %318 = OpConstant %6 -7.19999981
        %319 = OpConstant %6 -844.116028
        %345 = OpConstant %6 0.00390625
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %26 = OpVariable %25 Function
        %103 = OpVariable %25 Function
        %109 = OpVariable %25 Function
        %126 = OpVariable %25 Function
        %131 = OpVariable %25 Function
        %139 = OpVariable %25 Function
        %158 = OpVariable %25 Function
        %176 = OpVariable %93 Function
        %181 = OpVariable %25 Function
        %186 = OpVariable %25 Function
        %198 = OpVariable %25 Function
        %203 = OpVariable %25 Function
        %211 = OpVariable %25 Function
        %228 = OpVariable %25 Function
        %246 = OpVariable %25 Function
         %14 = OpLoad %11 %13
         %21 = OpAccessChain %20 %17 %19
         %22 = OpLoad %6 %21
               OpSelectionMerge %28 None
               OpBranchConditional %24 %27 %30
         %27 = OpLabel
         %29 = OpLoad %7 %17
               OpStore %26 %29
               OpBranch %28
         %30 = OpLabel
         %45 = OpAccessChain %44 %40 %42 %43
         %46 = OpLoad %6 %45
         %49 = OpCompositeConstruct %31 %36 %46 %33
         %50 = OpCompositeConstruct %31 %33 %33 %47
         %51 = OpCompositeConstruct %31 %33 %47 %47
         %52 = OpCompositeConstruct %31 %33 %33 %47
         %53 = OpCompositeConstruct %48 %49 %50 %51 %52
         %54 = OpCompositeExtract %6 %53 0 0
         %58 = OpCompositeConstruct %7 %54 %55 %56 %57
         %66 = OpSelect %7 %65 %62 %58
         %67 = OpCompositeExtract %6 %66 0
         %68 = OpCompositeExtract %6 %66 1
         %69 = OpCompositeExtract %6 %66 2
         %70 = OpCompositeExtract %6 %66 3
         %71 = OpCompositeConstruct %31 %67 %68 %69
         %72 = OpCompositeConstruct %31 %70 %47 %33
         %73 = OpCompositeConstruct %31 %33 %33 %33
         %74 = OpCompositeConstruct %32 %71 %72 %73
         %75 = OpCompositeExtract %31 %35 0
         %76 = OpCompositeExtract %31 %74 0
         %77 = OpFAdd %31 %75 %76
         %78 = OpCompositeExtract %31 %35 1
         %79 = OpCompositeExtract %31 %74 1
         %80 = OpFAdd %31 %78 %79
         %81 = OpCompositeExtract %31 %35 2
         %82 = OpCompositeExtract %31 %74 2
         %83 = OpFAdd %31 %81 %82
         %84 = OpCompositeConstruct %32 %77 %80 %83
         %85 = OpCompositeExtract %6 %84 0 0
         %86 = OpCompositeExtract %6 %84 0 1
         %87 = OpCompositeExtract %6 %84 0 2
         %88 = OpCompositeExtract %6 %84 1 0
         %89 = OpCompositeConstruct %7 %85 %86 %87 %88
         %91 = OpFSub %7 %89 %90
               OpStore %26 %91
               OpBranch %28
         %28 = OpLabel
         %94 = OpAccessChain %93 %26 %92
         %95 = OpLoad %6 %94
         %97 = OpAccessChain %20 %17 %96
         %98 = OpLoad %6 %97
         %99 = OpCompositeConstruct %7 %15 %22 %95 %98
        %100 = OpAccessChain %20 %17 %19
        %101 = OpLoad %6 %100
               OpSelectionMerge %105 None
               OpBranchConditional %24 %104 %107
        %104 = OpLabel
        %106 = OpLoad %7 %17
               OpStore %103 %106
               OpBranch %105
        %107 = OpLabel
               OpSelectionMerge %111 None
               OpBranchConditional %24 %110 %112
        %110 = OpLabel
               OpStore %109 %62
               OpBranch %111
        %112 = OpLabel
        %118 = OpExtInst %7 %1 Atanh %117
        %119 = OpFAdd %7 %118 %90
        %120 = OpExtInst %7 %1 Atanh %117
        %121 = OpExtInst %7 %1 Atanh %117
        %122 = OpExtInst %7 %1 FClamp %119 %120 %121
               OpStore %109 %122
               OpBranch %111
        %111 = OpLabel
        %123 = OpLoad %7 %109
        %124 = OpSelect %7 %65 %123 %108
               OpStore %103 %124
               OpBranch %105
        %105 = OpLabel
        %125 = OpLoad %7 %103
               OpSelectionMerge %128 None
               OpBranchConditional %24 %127 %130
        %127 = OpLabel
        %129 = OpLoad %7 %17
               OpStore %126 %129
               OpBranch %128
        %130 = OpLabel
               OpSelectionMerge %133 None
               OpBranchConditional %24 %132 %134
        %132 = OpLabel
               OpStore %131 %62
               OpBranch %133
        %134 = OpLabel
        %135 = OpExtInst %7 %1 Atanh %117
               OpStore %131 %135
               OpBranch %133
        %133 = OpLabel
        %136 = OpLoad %7 %131
        %137 = OpSelect %7 %65 %136 %108
               OpStore %126 %137
               OpBranch %128
        %128 = OpLabel
        %138 = OpLoad %7 %126
               OpSelectionMerge %141 None
               OpBranchConditional %24 %140 %143
        %140 = OpLabel
        %142 = OpLoad %7 %17
               OpStore %139 %142
               OpBranch %141
        %143 = OpLabel
        %144 = OpAccessChain %44 %40 %42 %19
        %145 = OpLoad %6 %144
        %147 = OpCompositeConstruct %7 %145 %33 %33 %33
        %148 = OpCompositeConstruct %7 %33 %145 %33 %33
        %149 = OpCompositeConstruct %7 %33 %33 %145 %33
        %150 = OpCompositeConstruct %7 %33 %33 %33 %145
        %151 = OpCompositeConstruct %146 %147 %148 %149 %150
        %153 = OpMatrixTimesVector %7 %151 %152
        %154 = OpCompositeExtract %6 %153 1
        %155 = OpCompositeConstruct %37 %154 %47
        %156 = OpCompositeExtract %6 %155 0
        %157 = OpCompositeConstruct %7 %36 %156 %56 %57
               OpSelectionMerge %160 None
               OpBranchConditional %24 %159 %161
        %159 = OpLabel
               OpStore %158 %62
               OpBranch %160
        %161 = OpLabel
        %162 = OpExtInst %7 %1 Atanh %117
               OpStore %158 %162
               OpBranch %160
        %160 = OpLabel
        %163 = OpLoad %7 %158
        %164 = OpSelect %7 %65 %163 %157
               OpStore %139 %164
               OpBranch %141
        %141 = OpLabel
        %165 = OpLoad %7 %139
        %166 = OpExtInst %7 %1 FClamp %125 %138 %165
        %167 = OpFMul %7 %102 %166
        %168 = OpCompositeExtract %6 %167 2
        %169 = OpFDiv %6 %168 %47
        %171 = OpCompositeConstruct %7 %169 %33 %33 %33
        %172 = OpCompositeConstruct %7 %47 %47 %33 %47
        %173 = OpCompositeConstruct %7 %47 %47 %47 %47
        %174 = OpCompositeConstruct %170 %171 %172 %173
        %175 = OpCompositeExtract %6 %174 0 0
               OpSelectionMerge %178 None
               OpBranchConditional %64 %177 %180
        %177 = OpLabel
               OpStore %176 %179
               OpBranch %178
        %180 = OpLabel
               OpSelectionMerge %183 None
               OpBranchConditional %24 %182 %185
        %182 = OpLabel
        %184 = OpLoad %7 %17
               OpStore %181 %184
               OpBranch %183
        %185 = OpLabel
               OpSelectionMerge %188 None
               OpBranchConditional %24 %187 %189
        %187 = OpLabel
               OpStore %186 %62
               OpBranch %188
        %189 = OpLabel
        %190 = OpExtInst %7 %1 Atanh %117
        %191 = OpFAdd %7 %190 %90
        %192 = OpExtInst %7 %1 Atanh %117
        %193 = OpExtInst %7 %1 Atanh %117
        %194 = OpExtInst %7 %1 FClamp %191 %192 %193
               OpStore %186 %194
               OpBranch %188
        %188 = OpLabel
        %195 = OpLoad %7 %186
        %196 = OpSelect %7 %65 %195 %108
               OpStore %181 %196
               OpBranch %183
        %183 = OpLabel
        %197 = OpLoad %7 %181
               OpSelectionMerge %200 None
               OpBranchConditional %24 %199 %202
        %199 = OpLabel
        %201 = OpLoad %7 %17
               OpStore %198 %201
               OpBranch %200
        %202 = OpLabel
               OpSelectionMerge %205 None
               OpBranchConditional %24 %204 %206
        %204 = OpLabel
               OpStore %203 %62
               OpBranch %205
        %206 = OpLabel
        %207 = OpExtInst %7 %1 Atanh %117
               OpStore %203 %207
               OpBranch %205
        %205 = OpLabel
        %208 = OpLoad %7 %203
        %209 = OpSelect %7 %65 %208 %108
               OpStore %198 %209
               OpBranch %200
        %200 = OpLabel
        %210 = OpLoad %7 %198
               OpSelectionMerge %213 None
               OpBranchConditional %24 %212 %215
        %212 = OpLabel
        %214 = OpLoad %7 %17
               OpStore %211 %214
               OpBranch %213
        %215 = OpLabel
        %216 = OpAccessChain %44 %40 %42 %19
        %217 = OpLoad %6 %216
        %218 = OpCompositeConstruct %7 %217 %33 %33 %33
        %219 = OpCompositeConstruct %7 %33 %217 %33 %33
        %220 = OpCompositeConstruct %7 %33 %33 %217 %33
        %221 = OpCompositeConstruct %7 %33 %33 %33 %217
        %222 = OpCompositeConstruct %146 %218 %219 %220 %221
        %223 = OpMatrixTimesVector %7 %222 %152
        %224 = OpCompositeExtract %6 %223 1
        %225 = OpCompositeConstruct %37 %224 %47
        %226 = OpCompositeExtract %6 %225 0
        %227 = OpCompositeConstruct %7 %36 %226 %56 %57
               OpSelectionMerge %230 None
               OpBranchConditional %24 %229 %231
        %229 = OpLabel
               OpStore %228 %62
               OpBranch %230
        %231 = OpLabel
        %232 = OpExtInst %7 %1 Atanh %117
               OpStore %228 %232
               OpBranch %230
        %230 = OpLabel
        %233 = OpLoad %7 %228
        %234 = OpSelect %7 %65 %233 %227
               OpStore %211 %234
               OpBranch %213
        %213 = OpLabel
        %235 = OpLoad %7 %211
        %236 = OpExtInst %7 %1 FClamp %197 %210 %235
        %237 = OpFMul %7 %102 %236
        %238 = OpCompositeExtract %6 %237 2
               OpStore %176 %238
               OpBranch %178
        %178 = OpLabel
        %239 = OpLoad %6 %176
        %240 = OpExtInst %6 %1 FMax %175 %239
        %241 = OpAccessChain %20 %17 %96
        %242 = OpLoad %6 %241
        %243 = OpCompositeConstruct %7 %15 %101 %240 %242
        %244 = OpAccessChain %20 %17 %19
        %245 = OpLoad %6 %244
               OpSelectionMerge %248 None
               OpBranchConditional %24 %247 %250
        %247 = OpLabel
        %249 = OpLoad %7 %17
               OpStore %246 %249
               OpBranch %248
        %250 = OpLabel
        %251 = OpAccessChain %44 %40 %42 %43
        %252 = OpLoad %6 %251
        %254 = OpCompositeExtract %6 %108 0
        %255 = OpCompositeExtract %6 %108 1
        %256 = OpCompositeExtract %6 %108 2
        %257 = OpCompositeExtract %6 %108 3
        %258 = OpCompositeConstruct %7 %254 %255 %256 %257
        %259 = OpCompositeConstruct %7 %33 %252 %47 %33
        %260 = OpCompositeConstruct %253 %258 %259
        %262 = OpCompositeExtract %7 %260 0
        %263 = OpCompositeExtract %7 %261 0
        %264 = OpFAdd %7 %262 %263
        %265 = OpCompositeExtract %7 %260 1
        %266 = OpCompositeExtract %7 %261 1
        %267 = OpFAdd %7 %265 %266
        %268 = OpCompositeConstruct %253 %264 %267
        %269 = OpCompositeExtract %6 %268 0 0
        %270 = OpCompositeExtract %6 %268 0 1
        %271 = OpCompositeExtract %6 %268 0 2
        %272 = OpCompositeExtract %6 %268 0 3
        %273 = OpCompositeConstruct %7 %269 %270 %271 %272
        %275 = OpAccessChain %20 %17 %43
        %276 = OpLoad %6 %275
        %277 = OpFOrdLessThan %23 %276 %33
        %278 = OpSelect %6 %277 %274 %36
        %279 = OpFAdd %6 %33 %278
        %280 = OpCompositeConstruct %7 %279 %55 %60 %61
        %281 = OpFAdd %7 %280 %90
        %282 = OpCompositeExtract %6 %281 2
        %283 = OpCompositeConstruct %7 %33 %59 %282 %61
        %284 = OpSelect %7 %65 %283 %273
               OpStore %246 %284
               OpBranch %248
        %248 = OpLabel
        %285 = OpAccessChain %93 %246 %92
        %286 = OpLoad %6 %285
        %287 = OpAccessChain %20 %17 %96
        %288 = OpLoad %6 %287
        %290 = OpSelect %6 %64 %289 %288
        %291 = OpAccessChain %20 %17 %96
        %292 = OpLoad %6 %291
        %293 = OpExtInst %6 %1 FMax %290 %292
        %294 = OpAccessChain %44 %40 %42 %19
        %295 = OpLoad %6 %294
        %296 = OpFMul %6 %293 %295
        %297 = OpCompositeConstruct %7 %15 %245 %286 %296
        %298 = OpExtInst %7 %1 FClamp %99 %243 %297
        %299 = OpLoad %7 %17
        %300 = OpAccessChain %44 %40 %42 %19
        %301 = OpLoad %6 %300
        %302 = OpCompositeExtract %6 %299 0
        %303 = OpCompositeExtract %6 %299 1
        %304 = OpCompositeExtract %6 %299 2
        %305 = OpCompositeExtract %6 %299 3
        %306 = OpCompositeConstruct %31 %302 %303 %304
        %307 = OpCompositeConstruct %31 %305 %33 %47
        %308 = OpCompositeConstruct %31 %33 %33 %33
        %309 = OpCompositeConstruct %31 %33 %301 %33
        %310 = OpCompositeConstruct %48 %306 %307 %308 %309
        %311 = OpCompositeExtract %6 %310 0 0
        %312 = OpCompositeExtract %6 %310 0 1
        %313 = OpCompositeExtract %6 %310 0 2
        %314 = OpCompositeExtract %6 %310 1 0
        %315 = OpCompositeConstruct %7 %311 %312 %313 %314
        %316 = OpCompositeExtract %6 %315 0
        %320 = OpCompositeConstruct %7 %316 %317 %318 %319
        %321 = OpAccessChain %44 %40 %42 %43
        %322 = OpLoad %6 %321
        %323 = OpAccessChain %44 %40 %42 %19
        %324 = OpLoad %6 %323
        %325 = OpCompositeConstruct %37 %322 %324
        %326 = OpCompositeExtract %6 %325 0
        %327 = OpAccessChain %44 %40 %42 %19
        %328 = OpLoad %6 %327
        %329 = OpFOrdGreaterThan %23 %326 %328
        %330 = OpCompositeConstruct %63 %24 %329 %64 %64
        %331 = OpSelect %7 %330 %320 %298
        %332 = OpCompositeExtract %6 %331 0
        %333 = OpCompositeExtract %6 %331 1
        %334 = OpCompositeExtract %6 %331 2
        %335 = OpCompositeExtract %6 %331 3
        %336 = OpCompositeConstruct %7 %332 %333 %334 %335
        %337 = OpCompositeConstruct %7 %47 %33 %33 %33
        %338 = OpCompositeConstruct %253 %336 %337
        %339 = OpCompositeExtract %6 %338 0 0
        %340 = OpCompositeExtract %6 %338 0 1
        %341 = OpCompositeExtract %6 %338 0 2
        %342 = OpCompositeExtract %6 %338 0 3
        %343 = OpCompositeConstruct %7 %339 %340 %341 %342
        %344 = OpVectorShuffle %37 %343 %343 0 1
        %346 = OpVectorTimesScalar %37 %344 %345
        %347 = OpImageSampleImplicitLod %7 %14 %346
               OpStore %9 %347
               OpReturn
               OpFunctionEnd
