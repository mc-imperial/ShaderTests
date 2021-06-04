; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 267
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %9 %119
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "_GLF_color"
               OpName %14 "buf1"
               OpMemberName %14 0 "_GLF_uniform_int_values"
               OpName %16 ""
               OpName %35 "m24"
               OpName %38 "buf0"
               OpMemberName %38 0 "_GLF_uniform_float_values"
               OpName %40 ""
               OpName %50 "a"
               OpName %53 "i"
               OpName %67 "j"
               OpName %77 "k"
               OpName %88 "l"
               OpName %119 "gl_FragCoord"
               OpName %144 "arr"
               OpName %167 "b"
               OpName %170 "i"
               OpName %178 "j"
               OpName %196 "idx"
               OpName %205 "k"
               OpName %214 "l"
               OpDecorate %9 Location 0
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 1
               OpDecorate %37 ArrayStride 16
               OpMemberDecorate %38 0 Offset 0
               OpDecorate %38 Block
               OpDecorate %40 DescriptorSet 0
               OpDecorate %40 Binding 0
               OpDecorate %119 BuiltIn FragCoord
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Output %7
          %9 = OpVariable %8 Output
         %10 = OpTypeInt 32 1
         %11 = OpTypeInt 32 0
         %12 = OpConstant %11 5
         %13 = OpTypeArray %10 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpConstant %10 0
         %18 = OpTypePointer Uniform %10
         %22 = OpConstant %10 1
         %33 = OpTypeMatrix %7 2
         %34 = OpTypePointer Function %33
         %36 = OpConstant %11 11
         %37 = OpTypeArray %6 %36
         %38 = OpTypeStruct %37
         %39 = OpTypePointer Uniform %38
         %40 = OpVariable %39 Uniform
         %41 = OpTypePointer Uniform %6
         %44 = OpConstant %6 1
         %45 = OpConstant %6 0
         %49 = OpTypePointer Function %10
         %62 = OpConstant %10 4
         %65 = OpTypeBool
         %68 = OpConstant %10 2
         %75 = OpConstant %10 5
        %107 = OpConstant %10 3
        %109 = OpConstant %10 6
        %112 = OpTypePointer Function %6
        %118 = OpTypePointer Input %7
        %119 = OpVariable %118 Input
        %120 = OpConstant %11 1
        %121 = OpTypePointer Input %6
        %141 = OpConstant %11 9
        %142 = OpTypeArray %6 %141
        %143 = OpTypePointer Function %142
        %147 = OpConstant %10 7
        %150 = OpConstant %10 8
        %153 = OpConstant %10 9
        %186 = OpConstant %11 0
        %189 = OpConstant %10 10
        %265 = OpTypePointer Output %6
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %35 = OpVariable %34 Function
         %50 = OpVariable %49 Function
         %53 = OpVariable %49 Function
         %67 = OpVariable %49 Function
         %77 = OpVariable %49 Function
         %88 = OpVariable %49 Function
        %144 = OpVariable %143 Function
        %167 = OpVariable %49 Function
        %170 = OpVariable %49 Function
        %178 = OpVariable %49 Function
        %196 = OpVariable %49 Function
        %205 = OpVariable %49 Function
        %214 = OpVariable %49 Function
         %19 = OpAccessChain %18 %16 %17 %17
         %20 = OpLoad %10 %19
         %21 = OpConvertSToF %6 %20
         %23 = OpAccessChain %18 %16 %17 %22
         %24 = OpLoad %10 %23
         %25 = OpConvertSToF %6 %24
         %26 = OpAccessChain %18 %16 %17 %22
         %27 = OpLoad %10 %26
         %28 = OpConvertSToF %6 %27
         %29 = OpAccessChain %18 %16 %17 %17
         %30 = OpLoad %10 %29
         %31 = OpConvertSToF %6 %30
         %32 = OpCompositeConstruct %7 %21 %25 %28 %31
               OpStore %9 %32
         %42 = OpAccessChain %41 %40 %17 %17
         %43 = OpLoad %6 %42
         %46 = OpCompositeConstruct %7 %43 %45 %45 %45
         %47 = OpCompositeConstruct %7 %45 %43 %45 %45
         %48 = OpCompositeConstruct %33 %46 %47
               OpStore %35 %48
         %51 = OpAccessChain %18 %16 %17 %22
         %52 = OpLoad %10 %51
               OpStore %50 %52
         %54 = OpAccessChain %18 %16 %17 %17
         %55 = OpLoad %10 %54
               OpStore %53 %55
               OpBranch %56
         %56 = OpLabel
               OpLoopMerge %58 %59 None
               OpBranch %60
         %60 = OpLabel
         %61 = OpLoad %10 %53
         %63 = OpAccessChain %18 %16 %17 %62
         %64 = OpLoad %10 %63
         %66 = OpSLessThan %65 %61 %64
               OpBranchConditional %66 %57 %58
         %57 = OpLabel
               OpStore %67 %68
               OpBranch %69
         %69 = OpLabel
               OpLoopMerge %71 %72 None
               OpBranch %73
         %73 = OpLabel
         %74 = OpLoad %10 %67
         %76 = OpSLessThan %65 %74 %75
               OpBranchConditional %76 %70 %71
         %70 = OpLabel
         %78 = OpAccessChain %18 %16 %17 %22
         %79 = OpLoad %10 %78
               OpStore %77 %79
               OpBranch %80
         %80 = OpLabel
               OpLoopMerge %82 %83 None
               OpBranch %84
         %84 = OpLabel
         %85 = OpLoad %10 %77
         %86 = OpLoad %10 %53
         %87 = OpSLessThan %65 %85 %86
               OpBranchConditional %87 %81 %82
         %81 = OpLabel
               OpStore %88 %17
               OpBranch %89
         %89 = OpLabel
               OpLoopMerge %91 %92 None
               OpBranch %93
         %93 = OpLabel
         %94 = OpLoad %10 %88
         %95 = OpLoad %10 %67
         %96 = OpSLessThan %65 %94 %95
               OpBranchConditional %96 %90 %91
         %90 = OpLabel
         %97 = OpLoad %10 %50
               OpSelectionMerge %103 None
               OpSwitch %97 %103 2 %98 553 %99 554 %100 556 %101 558 %102
         %98 = OpLabel
        %104 = OpLoad %10 %77
        %105 = OpExtInst %10 %1 SClamp %104 %17 %22
        %106 = OpLoad %10 %88
        %108 = OpExtInst %10 %1 SClamp %106 %17 %107
        %110 = OpAccessChain %41 %40 %17 %109
        %111 = OpLoad %6 %110
        %113 = OpAccessChain %112 %35 %105 %108
               OpStore %113 %111
               OpBranch %103
         %99 = OpLabel
               OpKill
        %100 = OpLabel
               OpKill
        %101 = OpLabel
               OpKill
        %102 = OpLabel
        %122 = OpAccessChain %121 %119 %120
        %123 = OpLoad %6 %122
        %124 = OpAccessChain %41 %40 %17 %109
        %125 = OpLoad %6 %124
        %126 = OpFOrdLessThan %65 %123 %125
               OpSelectionMerge %128 None
               OpBranchConditional %126 %127 %128
        %127 = OpLabel
               OpKill
        %128 = OpLabel
               OpBranch %103
        %103 = OpLabel
               OpBranch %92
         %92 = OpLabel
        %131 = OpLoad %10 %88
        %132 = OpIAdd %10 %131 %22
               OpStore %88 %132
               OpBranch %89
         %91 = OpLabel
               OpBranch %83
         %83 = OpLabel
        %133 = OpLoad %10 %77
        %134 = OpIAdd %10 %133 %22
               OpStore %77 %134
               OpBranch %80
         %82 = OpLabel
        %135 = OpLoad %10 %50
        %136 = OpIAdd %10 %135 %22
               OpStore %50 %136
               OpBranch %72
         %72 = OpLabel
        %137 = OpLoad %10 %67
        %138 = OpIAdd %10 %137 %22
               OpStore %67 %138
               OpBranch %69
         %71 = OpLabel
               OpBranch %59
         %59 = OpLabel
        %139 = OpLoad %10 %53
        %140 = OpIAdd %10 %139 %22
               OpStore %53 %140
               OpBranch %56
         %58 = OpLabel
        %145 = OpAccessChain %41 %40 %17 %109
        %146 = OpLoad %6 %145
        %148 = OpAccessChain %41 %40 %17 %147
        %149 = OpLoad %6 %148
        %151 = OpAccessChain %41 %40 %17 %150
        %152 = OpLoad %6 %151
        %154 = OpAccessChain %41 %40 %17 %153
        %155 = OpLoad %6 %154
        %156 = OpAccessChain %41 %40 %17 %22
        %157 = OpLoad %6 %156
        %158 = OpAccessChain %41 %40 %17 %68
        %159 = OpLoad %6 %158
        %160 = OpAccessChain %41 %40 %17 %107
        %161 = OpLoad %6 %160
        %162 = OpAccessChain %41 %40 %17 %62
        %163 = OpLoad %6 %162
        %164 = OpAccessChain %41 %40 %17 %75
        %165 = OpLoad %6 %164
        %166 = OpCompositeConstruct %142 %146 %149 %152 %155 %157 %159 %161 %163 %165
               OpStore %144 %166
        %168 = OpAccessChain %18 %16 %17 %17
        %169 = OpLoad %10 %168
               OpStore %167 %169
               OpStore %170 %17
               OpBranch %171
        %171 = OpLabel
               OpLoopMerge %173 %174 None
               OpBranch %175
        %175 = OpLabel
        %176 = OpLoad %10 %170
        %177 = OpSLessThan %65 %176 %75
               OpBranchConditional %177 %172 %173
        %172 = OpLabel
               OpStore %178 %22
               OpBranch %179
        %179 = OpLabel
               OpLoopMerge %181 %182 None
               OpBranch %183
        %183 = OpLabel
        %184 = OpLoad %10 %178
        %185 = OpSLessThan %65 %184 %75
               OpBranchConditional %185 %180 %181
        %180 = OpLabel
        %187 = OpAccessChain %121 %119 %186
        %188 = OpLoad %6 %187
        %190 = OpAccessChain %41 %40 %17 %189
        %191 = OpLoad %6 %190
        %192 = OpFOrdLessThan %65 %188 %191
               OpSelectionMerge %194 None
               OpBranchConditional %192 %193 %194
        %193 = OpLabel
               OpBranch %182
        %194 = OpLabel
        %197 = OpLoad %10 %167
        %198 = OpAccessChain %18 %16 %17 %107
        %199 = OpLoad %10 %198
        %200 = OpExtInst %10 %1 SMin %197 %199
               OpStore %196 %200
        %201 = OpLoad %10 %196
        %202 = OpAccessChain %41 %40 %17 %17
        %203 = OpLoad %6 %202
        %204 = OpAccessChain %112 %144 %201
               OpStore %204 %203
               OpStore %205 %17
               OpBranch %206
        %206 = OpLabel
               OpLoopMerge %208 %209 None
               OpBranch %210
        %210 = OpLabel
        %211 = OpLoad %10 %205
        %212 = OpLoad %10 %170
        %213 = OpSLessThan %65 %211 %212
               OpBranchConditional %213 %207 %208
        %207 = OpLabel
        %215 = OpAccessChain %18 %16 %17 %22
        %216 = OpLoad %10 %215
               OpStore %214 %216
               OpBranch %217
        %217 = OpLabel
               OpLoopMerge %219 %220 None
               OpBranch %221
        %221 = OpLabel
        %222 = OpLoad %10 %214
        %223 = OpLoad %10 %178
        %224 = OpSLessThan %65 %222 %223
               OpBranchConditional %224 %218 %219
        %218 = OpLabel
        %225 = OpLoad %10 %196
        %226 = OpAccessChain %18 %16 %17 %62
        %227 = OpLoad %10 %226
        %228 = OpISub %10 %225 %227
               OpSelectionMerge %231 None
               OpSwitch %228 %231 0 %229 2 %230
        %229 = OpLabel
        %232 = OpLoad %10 %196
        %233 = OpAccessChain %41 %40 %17 %109
        %234 = OpLoad %6 %233
        %235 = OpAccessChain %112 %144 %232
        %236 = OpLoad %6 %235
        %237 = OpFAdd %6 %236 %234
        %238 = OpAccessChain %112 %144 %232
               OpStore %238 %237
               OpBranch %231
        %230 = OpLabel
        %240 = OpLoad %10 %196
        %241 = OpAccessChain %18 %16 %17 %17
        %242 = OpLoad %10 %241
        %243 = OpAccessChain %18 %16 %17 %17
        %244 = OpLoad %10 %243
        %245 = OpAccessChain %112 %35 %242 %244
        %246 = OpLoad %6 %245
        %247 = OpAccessChain %112 %144 %240
        %248 = OpLoad %6 %247
        %249 = OpFAdd %6 %248 %246
        %250 = OpAccessChain %112 %144 %240
               OpStore %250 %249
               OpBranch %231
        %231 = OpLabel
               OpBranch %220
        %220 = OpLabel
        %253 = OpLoad %10 %214
        %254 = OpIAdd %10 %253 %22
               OpStore %214 %254
               OpBranch %217
        %219 = OpLabel
               OpBranch %209
        %209 = OpLabel
        %255 = OpLoad %10 %205
        %256 = OpIAdd %10 %255 %22
               OpStore %205 %256
               OpBranch %206
        %208 = OpLabel
        %257 = OpLoad %10 %167
        %258 = OpIAdd %10 %257 %22
               OpStore %167 %258
               OpBranch %182
        %182 = OpLabel
        %259 = OpLoad %10 %178
        %260 = OpIAdd %10 %259 %22
               OpStore %178 %260
               OpBranch %179
        %181 = OpLabel
               OpBranch %174
        %174 = OpLabel
        %261 = OpLoad %10 %170
        %262 = OpIAdd %10 %261 %22
               OpStore %170 %262
               OpBranch %171
        %173 = OpLabel
        %263 = OpAccessChain %112 %144 %17
        %264 = OpLoad %6 %263
        %266 = OpAccessChain %265 %9 %186
               OpStore %266 %264
               OpReturn
               OpFunctionEnd
