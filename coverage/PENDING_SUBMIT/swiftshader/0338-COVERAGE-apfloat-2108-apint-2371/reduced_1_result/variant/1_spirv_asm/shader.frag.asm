; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 258
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %173 %252
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 310
               OpName %4 "main"
               OpName %12 "pickColor(i1;"
               OpName %11 "i"
               OpName %18 "mand(f1;f1;"
               OpName %16 "xCoord"
               OpName %17 "yCoord"
               OpName %35 "xpos"
               OpName %40 "ypos"
               OpName %44 "height"
               OpName %46 "buf1"
               OpMemberName %46 0 "resolution"
               OpName %48 ""
               OpName %57 "width"
               OpName %63 "c_re"
               OpName %75 "c_im"
               OpName %83 "x"
               OpName %84 "y"
               OpName %85 "iteration"
               OpName %86 "k"
               OpName %108 "x_new"
               OpName %136 "param"
               OpName %146 "i"
               OpName %155 "j"
               OpName %166 "data"
               OpName %173 "gl_FragCoord"
               OpName %187 "param"
               OpName %188 "param"
               OpName %192 "buf0"
               OpMemberName %192 0 "injectionSwitch"
               OpName %194 ""
               OpName %202 "GLF_dead8j"
               OpName %203 "GLF_dead16pickColor_inline_return_value_0"
               OpName %206 "GLF_dead8gl_FragCoord"
               OpName %215 "GLF_dead8mand_inline_return_value_1"
               OpName %229 "sum"
               OpName %231 "i"
               OpName %252 "_GLF_color"
               OpMemberDecorate %46 0 Offset 0
               OpDecorate %46 Block
               OpDecorate %48 DescriptorSet 0
               OpDecorate %48 Binding 1
               OpDecorate %173 BuiltIn FragCoord
               OpMemberDecorate %192 0 Offset 0
               OpDecorate %192 Block
               OpDecorate %194 DescriptorSet 0
               OpDecorate %194 Binding 0
               OpDecorate %206 RelaxedPrecision
               OpDecorate %209 RelaxedPrecision
               OpDecorate %211 RelaxedPrecision
               OpDecorate %252 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %8 = OpTypeFloat 32
          %9 = OpTypeVector %8 3
         %10 = OpTypeFunction %9 %7
         %14 = OpTypePointer Function %8
         %15 = OpTypeFunction %9 %14 %14
         %22 = OpConstant %8 50
         %26 = OpConstant %8 120
         %30 = OpConstant %8 140
         %38 = OpConstant %6 256
         %45 = OpTypeVector %8 2
         %46 = OpTypeStruct %45
         %47 = OpTypePointer Uniform %46
         %48 = OpVariable %47 Uniform
         %49 = OpConstant %6 0
         %50 = OpTypeInt 32 0
         %51 = OpConstant %50 1
         %52 = OpTypePointer Uniform %8
         %58 = OpConstant %50 0
         %66 = OpConstant %6 2
         %69 = OpConstant %6 819
         %73 = OpConstant %6 102
         %93 = OpConstant %6 1000
         %94 = OpTypeBool
        %103 = OpConstant %6 262144
        %128 = OpConstant %6 1
        %141 = OpConstant %8 0
        %142 = OpConstant %8 0.5
        %143 = OpConstantComposite %9 %141 %141 %142
        %153 = OpConstant %6 4
        %163 = OpConstant %50 16
        %164 = OpTypeArray %9 %163
        %165 = OpTypePointer Function %164
        %171 = OpTypeVector %8 4
        %172 = OpTypePointer Input %171
        %173 = OpVariable %172 Input
        %174 = OpTypePointer Input %8
        %190 = OpTypePointer Function %9
        %192 = OpTypeStruct %45
        %193 = OpTypePointer Uniform %192
        %194 = OpVariable %193 Uniform
        %204 = OpConstant %8 1
        %205 = OpTypePointer Private %171
        %206 = OpVariable %205 Private
        %207 = OpTypePointer Private %8
        %210 = OpConstant %8 -1
        %221 = OpConstant %6 15
        %230 = OpConstantComposite %9 %141 %141 %141
        %238 = OpConstant %6 16
        %247 = OpConstant %8 16
        %248 = OpConstantComposite %9 %247 %247 %247
        %251 = OpTypePointer Output %171
        %252 = OpVariable %251 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
        %146 = OpVariable %7 Function
        %155 = OpVariable %7 Function
        %166 = OpVariable %165 Function
        %187 = OpVariable %14 Function
        %188 = OpVariable %14 Function
        %202 = OpVariable %7 Function
        %203 = OpVariable %190 Function
        %215 = OpVariable %190 Function
        %229 = OpVariable %190 Function
        %231 = OpVariable %7 Function
               OpStore %146 %49
               OpBranch %147
        %147 = OpLabel
               OpLoopMerge %149 %150 None
               OpBranch %151
        %151 = OpLabel
        %152 = OpLoad %6 %146
        %154 = OpSLessThan %94 %152 %153
               OpBranchConditional %154 %148 %149
        %148 = OpLabel
               OpStore %155 %49
               OpBranch %156
        %156 = OpLabel
               OpLoopMerge %158 %159 None
               OpBranch %160
        %160 = OpLabel
        %161 = OpLoad %6 %155
        %162 = OpSLessThan %94 %161 %153
               OpBranchConditional %162 %157 %158
        %157 = OpLabel
        %167 = OpLoad %6 %155
        %168 = OpIMul %6 %153 %167
        %169 = OpLoad %6 %146
        %170 = OpIAdd %6 %168 %169
        %175 = OpAccessChain %174 %173 %58
        %176 = OpLoad %8 %175
        %177 = OpLoad %6 %146
        %178 = OpISub %6 %177 %128
        %179 = OpConvertSToF %8 %178
        %180 = OpFAdd %8 %176 %179
        %181 = OpAccessChain %174 %173 %51
        %182 = OpLoad %8 %181
        %183 = OpLoad %6 %155
        %184 = OpISub %6 %183 %128
        %185 = OpConvertSToF %8 %184
        %186 = OpFAdd %8 %182 %185
               OpStore %187 %180
               OpStore %188 %186
        %189 = OpFunctionCall %9 %18 %187 %188
        %191 = OpAccessChain %190 %166 %170
               OpStore %191 %189
        %195 = OpAccessChain %52 %194 %49 %58
        %196 = OpLoad %8 %195
        %197 = OpAccessChain %52 %194 %49 %51
        %198 = OpLoad %8 %197
        %199 = OpFOrdGreaterThan %94 %196 %198
               OpSelectionMerge %201 None
               OpBranchConditional %199 %200 %201
        %200 = OpLabel
               OpStore %202 %128
        %208 = OpAccessChain %207 %206 %51
        %209 = OpLoad %8 %208
        %211 = OpFAdd %8 %209 %210
        %212 = OpConvertFToS %6 %211
        %213 = OpConvertSToF %8 %212
        %214 = OpCompositeConstruct %9 %204 %204 %213
               OpStore %203 %214
        %216 = OpLoad %9 %203
               OpStore %215 %216
        %217 = OpLoad %6 %202
        %218 = OpIMul %6 %153 %217
        %219 = OpLoad %6 %146
        %220 = OpIAdd %6 %218 %219
        %222 = OpExtInst %6 %1 SClamp %220 %49 %221
        %223 = OpLoad %9 %215
        %224 = OpAccessChain %190 %166 %222
               OpStore %224 %223
               OpBranch %201
        %201 = OpLabel
               OpBranch %159
        %159 = OpLabel
        %225 = OpLoad %6 %155
        %226 = OpIAdd %6 %225 %128
               OpStore %155 %226
               OpBranch %156
        %158 = OpLabel
               OpBranch %150
        %150 = OpLabel
        %227 = OpLoad %6 %146
        %228 = OpIAdd %6 %227 %128
               OpStore %146 %228
               OpBranch %147
        %149 = OpLabel
               OpStore %229 %230
               OpStore %231 %49
               OpBranch %232
        %232 = OpLabel
               OpLoopMerge %234 %235 None
               OpBranch %236
        %236 = OpLabel
        %237 = OpLoad %6 %231
        %239 = OpSLessThan %94 %237 %238
               OpBranchConditional %239 %233 %234
        %233 = OpLabel
        %240 = OpLoad %6 %231
        %241 = OpAccessChain %190 %166 %240
        %242 = OpLoad %9 %241
        %243 = OpLoad %9 %229
        %244 = OpFAdd %9 %243 %242
               OpStore %229 %244
               OpBranch %235
        %235 = OpLabel
        %245 = OpLoad %6 %231
        %246 = OpIAdd %6 %245 %128
               OpStore %231 %246
               OpBranch %232
        %234 = OpLabel
        %249 = OpLoad %9 %229
        %250 = OpFDiv %9 %249 %248
               OpStore %229 %250
        %253 = OpLoad %9 %229
        %254 = OpCompositeExtract %8 %253 0
        %255 = OpCompositeExtract %8 %253 1
        %256 = OpCompositeExtract %8 %253 2
        %257 = OpCompositeConstruct %171 %254 %255 %256 %204
               OpStore %252 %257
               OpReturn
               OpFunctionEnd
         %12 = OpFunction %9 None %10
         %11 = OpFunctionParameter %7
         %13 = OpLabel
         %20 = OpLoad %6 %11
         %21 = OpConvertSToF %8 %20
         %23 = OpFDiv %8 %21 %22
         %24 = OpLoad %6 %11
         %25 = OpConvertSToF %8 %24
         %27 = OpFDiv %8 %25 %26
         %28 = OpLoad %6 %11
         %29 = OpConvertSToF %8 %28
         %31 = OpFDiv %8 %29 %30
         %32 = OpCompositeConstruct %9 %23 %27 %31
               OpReturnValue %32
               OpFunctionEnd
         %18 = OpFunction %9 None %15
         %16 = OpFunctionParameter %14
         %17 = OpFunctionParameter %14
         %19 = OpLabel
         %35 = OpVariable %7 Function
         %40 = OpVariable %7 Function
         %44 = OpVariable %7 Function
         %57 = OpVariable %7 Function
         %63 = OpVariable %7 Function
         %75 = OpVariable %7 Function
         %83 = OpVariable %7 Function
         %84 = OpVariable %7 Function
         %85 = OpVariable %7 Function
         %86 = OpVariable %7 Function
        %108 = OpVariable %7 Function
        %136 = OpVariable %7 Function
         %36 = OpLoad %8 %16
         %37 = OpConvertFToS %6 %36
         %39 = OpIMul %6 %37 %38
               OpStore %35 %39
         %41 = OpLoad %8 %17
         %42 = OpConvertFToS %6 %41
         %43 = OpIMul %6 %42 %38
               OpStore %40 %43
         %53 = OpAccessChain %52 %48 %49 %51
         %54 = OpLoad %8 %53
         %55 = OpConvertFToS %6 %54
         %56 = OpIMul %6 %55 %38
               OpStore %44 %56
         %59 = OpAccessChain %52 %48 %49 %58
         %60 = OpLoad %8 %59
         %61 = OpConvertFToS %6 %60
         %62 = OpIMul %6 %61 %38
               OpStore %57 %62
         %64 = OpLoad %6 %35
         %65 = OpLoad %6 %57
         %67 = OpSDiv %6 %65 %66
         %68 = OpISub %6 %64 %67
         %70 = OpIMul %6 %68 %69
         %71 = OpLoad %6 %57
         %72 = OpSDiv %6 %70 %71
         %74 = OpISub %6 %72 %73
               OpStore %63 %74
         %76 = OpLoad %6 %40
         %77 = OpLoad %6 %44
         %78 = OpSDiv %6 %77 %66
         %79 = OpISub %6 %76 %78
         %80 = OpIMul %6 %79 %69
         %81 = OpLoad %6 %57
         %82 = OpSDiv %6 %80 %81
               OpStore %75 %82
               OpStore %83 %49
               OpStore %84 %49
               OpStore %85 %49
               OpStore %86 %49
               OpBranch %87
         %87 = OpLabel
               OpLoopMerge %89 %90 None
               OpBranch %91
         %91 = OpLabel
         %92 = OpLoad %6 %86
         %95 = OpSLessThan %94 %92 %93
               OpBranchConditional %95 %88 %89
         %88 = OpLabel
         %96 = OpLoad %6 %83
         %97 = OpLoad %6 %83
         %98 = OpIMul %6 %96 %97
         %99 = OpLoad %6 %84
        %100 = OpLoad %6 %84
        %101 = OpIMul %6 %99 %100
        %102 = OpIAdd %6 %98 %101
        %104 = OpSGreaterThan %94 %102 %103
               OpSelectionMerge %106 None
               OpBranchConditional %104 %105 %106
        %105 = OpLabel
               OpBranch %89
        %106 = OpLabel
        %109 = OpLoad %6 %83
        %110 = OpLoad %6 %83
        %111 = OpIMul %6 %109 %110
        %112 = OpLoad %6 %84
        %113 = OpLoad %6 %84
        %114 = OpIMul %6 %112 %113
        %115 = OpISub %6 %111 %114
        %116 = OpSDiv %6 %115 %38
        %117 = OpLoad %6 %63
        %118 = OpIAdd %6 %116 %117
               OpStore %108 %118
        %119 = OpLoad %6 %83
        %120 = OpIMul %6 %66 %119
        %121 = OpLoad %6 %84
        %122 = OpIMul %6 %120 %121
        %123 = OpSDiv %6 %122 %38
        %124 = OpLoad %6 %75
        %125 = OpIAdd %6 %123 %124
               OpStore %84 %125
        %126 = OpLoad %6 %108
               OpStore %83 %126
        %127 = OpLoad %6 %85
        %129 = OpIAdd %6 %127 %128
               OpStore %85 %129
               OpBranch %90
         %90 = OpLabel
        %130 = OpLoad %6 %86
        %131 = OpIAdd %6 %130 %128
               OpStore %86 %131
               OpBranch %87
         %89 = OpLabel
        %132 = OpLoad %6 %85
        %133 = OpSLessThan %94 %132 %93
               OpSelectionMerge %135 None
               OpBranchConditional %133 %134 %140
        %134 = OpLabel
        %137 = OpLoad %6 %85
               OpStore %136 %137
        %138 = OpFunctionCall %9 %12 %136
               OpReturnValue %138
        %140 = OpLabel
               OpReturnValue %143
        %135 = OpLabel
               OpUnreachable
               OpFunctionEnd
