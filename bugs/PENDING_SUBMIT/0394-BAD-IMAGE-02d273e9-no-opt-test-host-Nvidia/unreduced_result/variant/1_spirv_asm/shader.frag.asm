; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 277
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %16 %156
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "i"
               OpName %13 "coord"
               OpName %16 "gl_FragCoord"
               OpName %22 "texel"
               OpName %26 "tex"
               OpName %113 "buf0"
               OpMemberName %113 0 "injectionSwitch"
               OpName %115 ""
               OpName %156 "_GLF_color"
               OpDecorate %8 RelaxedPrecision
               OpDecorate %16 BuiltIn FragCoord
               OpDecorate %26 RelaxedPrecision
               OpDecorate %26 DescriptorSet 0
               OpDecorate %26 Binding 1
               OpDecorate %27 RelaxedPrecision
               OpDecorate %29 RelaxedPrecision
               OpDecorate %99 RelaxedPrecision
               OpMemberDecorate %113 0 Offset 0
               OpDecorate %113 Block
               OpDecorate %115 DescriptorSet 0
               OpDecorate %115 Binding 0
               OpDecorate %156 Location 0
               OpDecorate %195 RelaxedPrecision
               OpDecorate %200 RelaxedPrecision
               OpDecorate %201 RelaxedPrecision
               OpDecorate %206 RelaxedPrecision
               OpDecorate %211 RelaxedPrecision
               OpDecorate %214 RelaxedPrecision
               OpDecorate %215 RelaxedPrecision
               OpDecorate %219 RelaxedPrecision
               OpDecorate %222 RelaxedPrecision
               OpDecorate %225 RelaxedPrecision
               OpDecorate %226 RelaxedPrecision
               OpDecorate %227 RelaxedPrecision
               OpDecorate %228 RelaxedPrecision
               OpDecorate %229 RelaxedPrecision
               OpDecorate %231 RelaxedPrecision
               OpDecorate %232 RelaxedPrecision
               OpDecorate %233 RelaxedPrecision
               OpDecorate %234 RelaxedPrecision
               OpDecorate %235 RelaxedPrecision
               OpDecorate %236 RelaxedPrecision
               OpDecorate %237 RelaxedPrecision
               OpDecorate %238 RelaxedPrecision
               OpDecorate %239 RelaxedPrecision
               OpDecorate %240 RelaxedPrecision
               OpDecorate %241 RelaxedPrecision
               OpDecorate %242 RelaxedPrecision
               OpDecorate %243 RelaxedPrecision
               OpDecorate %244 RelaxedPrecision
               OpDecorate %247 RelaxedPrecision
               OpDecorate %248 RelaxedPrecision
               OpDecorate %249 RelaxedPrecision
               OpDecorate %250 RelaxedPrecision
               OpDecorate %252 RelaxedPrecision
               OpDecorate %253 RelaxedPrecision
               OpDecorate %254 RelaxedPrecision
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 0
         %10 = OpTypeFloat 32
         %11 = OpTypeVector %10 2
         %12 = OpTypePointer Function %11
         %14 = OpTypeVector %10 4
         %15 = OpTypePointer Input %14
         %16 = OpVariable %15 Input
         %19 = OpConstant %10 0.00390625
         %21 = OpTypePointer Function %14
         %23 = OpTypeImage %10 2D 0 0 0 1 Unknown
         %24 = OpTypeSampledImage %23
         %25 = OpTypePointer UniformConstant %24
         %26 = OpVariable %25 UniformConstant
         %35 = OpTypeBool
         %36 = OpConstantTrue %35
         %37 = OpTypePointer Function %10
         %41 = OpTypeInt 32 0
         %42 = OpConstant %41 0
         %45 = OpConstant %41 1
         %50 = OpConstant %10 338.417999
         %91 = OpConstant %41 2
         %95 = OpConstant %10 1
        %100 = OpConstant %6 16
        %103 = OpConstantFalse %35
        %106 = OpTypePointer Input %10
        %109 = OpConstant %10 0
        %113 = OpTypeStruct %11
        %114 = OpTypePointer Uniform %113
        %115 = OpVariable %114 Uniform
        %116 = OpTypePointer Uniform %10
        %141 = OpTypeVector %35 3
        %144 = OpTypeVector %35 4
        %155 = OpTypePointer Output %14
        %156 = OpVariable %155 Output
        %166 = OpTypeMatrix %14 4
        %167 = OpConstantComposite %14 %95 %109 %109 %109
        %168 = OpConstantComposite %14 %109 %95 %109 %109
        %169 = OpConstantComposite %14 %109 %109 %95 %109
        %170 = OpConstantComposite %14 %109 %109 %109 %95
        %171 = OpConstantComposite %166 %167 %168 %169 %170
        %177 = OpConstant %10 -933.76001
        %178 = OpConstant %10 -8
        %179 = OpConstantComposite %11 %177 %178
        %184 = OpTypeMatrix %11 2
        %185 = OpConstantComposite %11 %95 %109
        %186 = OpConstantComposite %11 %109 %95
        %187 = OpConstantComposite %184 %185 %186
        %189 = OpConstant %10 256
        %196 = OpConstantComposite %11 %95 %95
        %197 = OpConstant %10 416.989014
        %208 = OpConstant %10 -3.4000001
        %209 = OpConstant %10 8.10000038
        %210 = OpConstantComposite %11 %208 %209
        %218 = OpConstant %10 45.5600014
        %220 = OpTypeVector %35 2
        %221 = OpConstantComposite %220 %36 %103
        %223 = OpTypeVector %10 3
        %224 = OpTypeMatrix %223 2
        %230 = OpTypeMatrix %223 4
        %251 = OpConstant %6 1
        %260 = OpConstant %10 -8212.64062
        %265 = OpConstant %41 3
        %271 = OpConstant %10 261.351013
        %272 = OpConstant %10 -569.367981
        %273 = OpConstant %10 90.25
        %275 = OpConstantComposite %144 %36 %103 %103 %103
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %13 = OpVariable %12 Function
         %22 = OpVariable %21 Function
         %38 = OpVariable %37 Function
         %58 = OpVariable %37 Function
         %74 = OpVariable %37 Function
        %148 = OpVariable %12 Function
        %152 = OpVariable %21 Function
        %201 = OpVariable %12 Function
        %255 = OpVariable %21 Function
               OpStore %8 %9
         %17 = OpLoad %14 %16
         %18 = OpVectorShuffle %11 %17 %17 0 1
         %20 = OpVectorTimesScalar %11 %18 %19
               OpStore %13 %20
         %27 = OpLoad %24 %26
         %28 = OpLoad %11 %13
         %29 = OpImageSampleImplicitLod %14 %27 %28
               OpStore %22 %29
               OpBranch %30
         %30 = OpLabel
               OpLoopMerge %32 %33 None
               OpBranch %34
         %34 = OpLabel
               OpSelectionMerge %40 None
               OpBranchConditional %36 %39 %49
         %39 = OpLabel
         %43 = OpAccessChain %37 %22 %42
         %44 = OpLoad %10 %43
         %46 = OpAccessChain %37 %22 %45
         %47 = OpLoad %10 %46
         %48 = OpFAdd %10 %44 %47
               OpStore %38 %48
               OpBranch %40
         %49 = OpLabel
               OpStore %38 %50
               OpBranch %40
         %40 = OpLabel
         %51 = OpLoad %10 %38
         %52 = OpAccessChain %37 %22 %42
         %53 = OpLoad %10 %52
         %54 = OpAccessChain %37 %22 %45
         %55 = OpLoad %10 %54
         %56 = OpFAdd %10 %53 %55
         %57 = OpExtInst %10 %1 FMax %51 %56
               OpSelectionMerge %60 None
               OpBranchConditional %36 %59 %66
         %59 = OpLabel
         %61 = OpAccessChain %37 %22 %42
         %62 = OpLoad %10 %61
         %63 = OpAccessChain %37 %22 %45
         %64 = OpLoad %10 %63
         %65 = OpFAdd %10 %62 %64
               OpStore %58 %65
               OpBranch %60
         %66 = OpLabel
               OpStore %58 %50
               OpBranch %60
         %60 = OpLabel
         %67 = OpLoad %10 %58
         %68 = OpAccessChain %37 %22 %42
         %69 = OpLoad %10 %68
         %70 = OpAccessChain %37 %22 %45
         %71 = OpLoad %10 %70
         %72 = OpFAdd %10 %69 %71
         %73 = OpExtInst %10 %1 FMax %67 %72
               OpSelectionMerge %76 None
               OpBranchConditional %36 %75 %82
         %75 = OpLabel
         %77 = OpAccessChain %37 %22 %42
         %78 = OpLoad %10 %77
         %79 = OpAccessChain %37 %22 %45
         %80 = OpLoad %10 %79
         %81 = OpFAdd %10 %78 %80
               OpStore %74 %81
               OpBranch %76
         %82 = OpLabel
               OpStore %74 %50
               OpBranch %76
         %76 = OpLabel
         %83 = OpLoad %10 %74
         %84 = OpAccessChain %37 %22 %42
         %85 = OpLoad %10 %84
         %86 = OpAccessChain %37 %22 %45
         %87 = OpLoad %10 %86
         %88 = OpFAdd %10 %85 %87
         %89 = OpExtInst %10 %1 FMax %83 %88
         %90 = OpExtInst %10 %1 FClamp %57 %73 %89
         %92 = OpAccessChain %37 %22 %91
         %93 = OpLoad %10 %92
         %94 = OpFAdd %10 %90 %93
         %96 = OpFOrdGreaterThan %35 %94 %95
               OpSelectionMerge %98 None
               OpBranchConditional %96 %97 %98
         %97 = OpLabel
         %99 = OpLoad %6 %8
        %101 = OpSLessThan %35 %99 %100
        %102 = OpLogicalAnd %35 %101 %36
               OpSelectionMerge %105 None
               OpBranchConditional %36 %104 %105
        %104 = OpLabel
        %107 = OpAccessChain %106 %16 %42
        %108 = OpLoad %10 %107
        %110 = OpFOrdGreaterThanEqual %35 %108 %109
               OpSelectionMerge %112 None
               OpBranchConditional %110 %111 %112
        %111 = OpLabel
        %117 = OpAccessChain %116 %115 %9 %42
        %118 = OpLoad %10 %117
        %119 = OpAccessChain %116 %115 %9 %45
        %120 = OpLoad %10 %119
        %121 = OpFOrdLessThan %35 %118 %120
               OpSelectionMerge %123 None
               OpBranchConditional %121 %122 %123
        %122 = OpLabel
        %124 = OpLogicalNot %35 %103
               OpSelectionMerge %126 None
               OpBranchConditional %124 %125 %126
        %125 = OpLabel
        %127 = OpAccessChain %106 %16 %45
        %128 = OpLoad %10 %127
        %129 = OpFOrdGreaterThanEqual %35 %128 %109
        %130 = OpLogicalNot %35 %129
        %131 = OpLogicalAnd %35 %130 %36
        %132 = OpLogicalNot %35 %131
               OpBranch %126
        %126 = OpLabel
        %133 = OpPhi %35 %103 %122 %132 %125
        %134 = OpLogicalNot %35 %133
        %135 = OpLogicalNot %35 %134
               OpBranch %123
        %123 = OpLabel
        %136 = OpPhi %35 %121 %111 %135 %126
        %137 = OpLogicalNot %35 %136
        %138 = OpLogicalNot %35 %137
               OpBranch %112
        %112 = OpLabel
        %139 = OpPhi %35 %110 %104 %138 %123
               OpBranch %105
        %105 = OpLabel
        %140 = OpPhi %35 %36 %97 %139 %112
        %142 = OpCompositeConstruct %141 %140 %103 %103
        %143 = OpCompositeExtract %35 %142 0
        %145 = OpCompositeConstruct %144 %102 %103 %143 %36
        %146 = OpCompositeExtract %35 %145 0
               OpBranch %98
         %98 = OpLabel
        %147 = OpPhi %35 %96 %76 %146 %105
               OpBranchConditional %147 %31 %32
         %31 = OpLabel
               OpSelectionMerge %150 None
               OpBranchConditional %36 %149 %176
        %149 = OpLabel
        %151 = OpLoad %14 %22
               OpSelectionMerge %154 None
               OpBranchConditional %103 %153 %160
        %153 = OpLabel
        %157 = OpLoad %14 %156
        %158 = OpLoad %14 %156
        %159 = OpExtInst %14 %1 FMin %157 %158
               OpStore %152 %159
               OpBranch %154
        %160 = OpLabel
        %161 = OpLoad %14 %22
               OpStore %152 %161
               OpBranch %154
        %154 = OpLabel
        %162 = OpLoad %14 %152
        %163 = OpLoad %14 %22
        %164 = OpLoad %14 %22
        %165 = OpLoad %14 %22
        %172 = OpVectorTimesMatrix %14 %165 %171
        %173 = OpExtInst %14 %1 FClamp %163 %164 %172
        %174 = OpExtInst %14 %1 FClamp %151 %162 %173
        %175 = OpVectorShuffle %11 %174 %174 0 2
               OpStore %148 %175
               OpBranch %150
        %176 = OpLabel
               OpStore %148 %179
               OpBranch %150
        %150 = OpLabel
        %180 = OpLoad %11 %148
        %181 = OpLoad %14 %22
        %182 = OpVectorShuffle %11 %181 %181 1 1
        %183 = OpFAdd %11 %180 %182
               OpStore %13 %183
        %188 = OpLoad %11 %13
        %190 = OpVectorTimesScalar %11 %188 %189
        %191 = OpExtInst %11 %1 Floor %190
        %192 = OpCompositeConstruct %11 %189 %189
        %193 = OpFDiv %11 %191 %192
        %194 = OpMatrixTimesVector %11 %187 %193
               OpStore %13 %194
        %195 = OpLoad %24 %26
        %198 = OpAccessChain %37 %13 %45
        %199 = OpLoad %10 %198
        %200 = OpCompositeConstruct %11 %197 %199
               OpSelectionMerge %203 None
               OpBranchConditional %36 %202 %207
        %202 = OpLabel
        %204 = OpAccessChain %37 %13 %45
        %205 = OpLoad %10 %204
        %206 = OpCompositeConstruct %11 %197 %205
               OpStore %201 %206
               OpBranch %203
        %207 = OpLabel
               OpStore %201 %210
               OpBranch %203
        %203 = OpLabel
        %211 = OpLoad %11 %201
        %212 = OpAccessChain %37 %13 %45
        %213 = OpLoad %10 %212
        %214 = OpCompositeConstruct %11 %197 %213
        %215 = OpExtInst %11 %1 FClamp %200 %211 %214
        %216 = OpAccessChain %37 %13 %42
        %217 = OpLoad %10 %216
        %219 = OpCompositeConstruct %11 %217 %218
        %222 = OpSelect %11 %221 %219 %215
        %225 = OpCompositeExtract %10 %222 0
        %226 = OpCompositeExtract %10 %222 1
        %227 = OpCompositeConstruct %223 %225 %226 %109
        %228 = OpCompositeConstruct %223 %109 %109 %109
        %229 = OpCompositeConstruct %224 %227 %228
        %231 = OpCompositeExtract %10 %229 0 0
        %232 = OpCompositeExtract %10 %229 0 1
        %233 = OpCompositeExtract %10 %229 0 2
        %234 = OpCompositeExtract %10 %229 1 0
        %235 = OpCompositeExtract %10 %229 1 1
        %236 = OpCompositeExtract %10 %229 1 2
        %237 = OpCompositeConstruct %223 %231 %232 %233
        %238 = OpCompositeConstruct %223 %234 %235 %236
        %239 = OpCompositeConstruct %223 %109 %109 %95
        %240 = OpCompositeConstruct %223 %109 %109 %109
        %241 = OpCompositeConstruct %230 %237 %238 %239 %240
        %242 = OpCompositeExtract %223 %241 0
        %243 = OpCompositeExtract %223 %241 1
        %244 = OpCompositeConstruct %224 %242 %243
        %245 = OpCompositeExtract %10 %244 0 0
        %246 = OpCompositeExtract %10 %244 0 1
        %247 = OpCompositeConstruct %11 %245 %246
        %248 = OpFMul %11 %196 %247
        %249 = OpImageSampleImplicitLod %14 %195 %248
               OpStore %22 %249
        %250 = OpLoad %6 %8
        %252 = OpIAdd %6 %250 %251
               OpStore %8 %252
        %253 = OpISub %6 %250 %9
        %254 = OpSDiv %6 %253 %251
               OpBranch %33
         %33 = OpLabel
               OpBranch %30
         %32 = OpLabel
               OpSelectionMerge %257 None
               OpBranchConditional %103 %256 %259
        %256 = OpLabel
        %258 = OpLoad %14 %22
               OpStore %255 %258
               OpBranch %257
        %259 = OpLabel
        %261 = OpAccessChain %37 %22 %45
        %262 = OpLoad %10 %261
        %263 = OpAccessChain %37 %22 %91
        %264 = OpLoad %10 %263
        %266 = OpAccessChain %37 %22 %265
        %267 = OpLoad %10 %266
        %268 = OpCompositeConstruct %14 %260 %262 %264 %267
        %269 = OpAccessChain %37 %22 %42
        %270 = OpLoad %10 %269
        %274 = OpCompositeConstruct %14 %270 %271 %272 %273
        %276 = OpSelect %14 %275 %274 %268
               OpStore %156 %276
               OpStore %255 %276
               OpBranch %257
        %257 = OpLabel
               OpReturn
               OpFunctionEnd
