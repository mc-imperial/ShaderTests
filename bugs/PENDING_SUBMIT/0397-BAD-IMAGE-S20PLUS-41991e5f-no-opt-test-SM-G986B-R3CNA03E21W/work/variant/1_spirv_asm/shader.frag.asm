; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 216
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %145 %208
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %7 "struct_base"
               OpMemberName %7 0 "data"
               OpMemberName %7 1 "leftIndex"
               OpMemberName %7 2 "rightIndex"
               OpName %13 "func_a(struct-struct_base-i1-i1-i11;i1;"
               OpName %11 "struct_a"
               OpName %12 "input_a"
               OpName %18 "func_b(i1;i1;"
               OpName %16 "input_b"
               OpName %17 "input_a"
               OpName %25 "compute_value(f1;f1;"
               OpName %23 "limit"
               OpName %24 "thirty_two"
               OpName %31 "struct_a"
               OpName %39 "var_a"
               OpName %40 "var_b"
               OpName %65 "param"
               OpName %69 "param"
               OpName %76 "result"
               OpName %78 "i"
               OpName %109 "param"
               OpName %110 "param"
               OpName %127 "c"
               OpName %132 "thirty_two"
               OpName %134 "buf1"
               OpMemberName %134 0 "resolution"
               OpName %136 ""
               OpName %145 "gl_FragCoord"
               OpName %146 "param"
               OpName %150 "param"
               OpName %154 "param"
               OpName %158 "param"
               OpName %169 "i"
               OpName %178 "buf0"
               OpMemberName %178 0 "injectionSwitch"
               OpName %180 ""
               OpName %208 "_GLF_color"
               OpMemberDecorate %134 0 Offset 0
               OpDecorate %134 Block
               OpDecorate %136 DescriptorSet 0
               OpDecorate %136 Binding 1
               OpDecorate %145 BuiltIn FragCoord
               OpMemberDecorate %178 0 Offset 0
               OpDecorate %178 Block
               OpDecorate %180 DescriptorSet 0
               OpDecorate %180 Binding 0
               OpDecorate %208 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeStruct %6 %6 %6
          %8 = OpTypePointer Function %7
          %9 = OpTypePointer Function %6
         %10 = OpTypeFunction %2 %8 %9
         %15 = OpTypeFunction %2 %9 %9
         %20 = OpTypeFloat 32
         %21 = OpTypePointer Function %20
         %22 = OpTypeFunction %20 %21 %21
         %27 = OpTypeInt 32 0
         %28 = OpConstant %27 10
         %29 = OpTypeArray %7 %28
         %30 = OpTypePointer Private %29
         %31 = OpVariable %30 Private
         %32 = OpConstant %6 1
         %33 = OpConstant %6 -1
         %34 = OpConstantComposite %7 %32 %33 %32
         %35 = OpConstantComposite %7 %32 %32 %32
         %36 = OpConstantComposite %29 %34 %35 %35 %35 %35 %35 %35 %35 %35 %35
         %37 = OpConstant %6 0
         %46 = OpTypeBool
         %47 = OpConstantTrue %46
         %49 = OpConstant %6 5
         %57 = OpConstant %6 9
         %59 = OpTypePointer Private %6
         %66 = OpTypePointer Private %7
         %77 = OpConstant %20 -0.5
         %85 = OpConstant %6 800
         %88 = OpConstant %6 32
         %93 = OpConstant %20 0.400000006
        %102 = OpConstant %20 0.00999999978
        %106 = OpConstant %20 100
        %125 = OpTypeVector %20 3
        %126 = OpTypePointer Function %125
        %128 = OpConstant %20 7
        %129 = OpConstant %20 8
        %130 = OpConstant %20 9
        %131 = OpConstantComposite %125 %128 %129 %130
        %133 = OpTypeVector %20 2
        %134 = OpTypeStruct %133
        %135 = OpTypePointer Uniform %134
        %136 = OpVariable %135 Uniform
        %137 = OpConstant %27 0
        %138 = OpTypePointer Uniform %20
        %143 = OpTypeVector %20 4
        %144 = OpTypePointer Input %143
        %145 = OpVariable %144 Input
        %147 = OpTypePointer Input %20
        %155 = OpConstant %27 1
        %167 = OpConstant %27 2
        %176 = OpConstant %6 3
        %178 = OpTypeStruct %133
        %179 = OpTypePointer Uniform %178
        %180 = OpVariable %179 Uniform
        %192 = OpConstant %20 1
        %207 = OpTypePointer Output %143
        %208 = OpVariable %207 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
        %127 = OpVariable %126 Function
        %132 = OpVariable %21 Function
        %146 = OpVariable %21 Function
        %150 = OpVariable %21 Function
        %154 = OpVariable %21 Function
        %158 = OpVariable %21 Function
        %169 = OpVariable %9 Function
               OpStore %31 %36
               OpStore %127 %131
        %139 = OpAccessChain %138 %136 %37 %137
        %140 = OpLoad %20 %139
        %141 = OpFDiv %20 %140 %129
        %142 = OpExtInst %20 %1 Round %141
               OpStore %132 %142
        %148 = OpAccessChain %147 %145 %137
        %149 = OpLoad %20 %148
               OpStore %146 %149
        %151 = OpLoad %20 %132
               OpStore %150 %151
        %152 = OpFunctionCall %20 %25 %146 %150
        %153 = OpAccessChain %21 %127 %137
               OpStore %153 %152
        %156 = OpAccessChain %147 %145 %155
        %157 = OpLoad %20 %156
               OpStore %154 %157
        %159 = OpLoad %20 %132
               OpStore %158 %159
        %160 = OpFunctionCall %20 %25 %154 %158
        %161 = OpAccessChain %21 %127 %155
               OpStore %161 %160
        %162 = OpAccessChain %21 %127 %137
        %163 = OpLoad %20 %162
        %164 = OpAccessChain %21 %127 %155
        %165 = OpLoad %20 %164
        %166 = OpFAdd %20 %163 %165
        %168 = OpAccessChain %21 %127 %167
               OpStore %168 %166
               OpStore %169 %37
               OpBranch %170
        %170 = OpLabel
               OpLoopMerge %172 %173 None
               OpBranch %174
        %174 = OpLabel
        %175 = OpLoad %6 %169
        %177 = OpSLessThan %46 %175 %176
               OpBranchConditional %177 %171 %172
        %171 = OpLabel
        %181 = OpAccessChain %138 %180 %37 %137
        %182 = OpLoad %20 %181
        %183 = OpAccessChain %138 %180 %37 %155
        %184 = OpLoad %20 %183
        %185 = OpFOrdGreaterThan %46 %182 %184
               OpSelectionMerge %187 None
               OpBranchConditional %185 %186 %187
        %186 = OpLabel
               OpKill
        %187 = OpLabel
        %189 = OpLoad %6 %169
        %190 = OpAccessChain %21 %127 %189
        %191 = OpLoad %20 %190
        %193 = OpFOrdGreaterThanEqual %46 %191 %192
               OpSelectionMerge %195 None
               OpBranchConditional %193 %194 %195
        %194 = OpLabel
        %196 = OpLoad %6 %169
        %197 = OpLoad %6 %169
        %198 = OpAccessChain %21 %127 %197
        %199 = OpLoad %20 %198
        %200 = OpLoad %6 %169
        %201 = OpAccessChain %21 %127 %200
        %202 = OpLoad %20 %201
        %203 = OpFMul %20 %199 %202
        %204 = OpAccessChain %21 %127 %196
               OpStore %204 %203
               OpBranch %195
        %195 = OpLabel
               OpBranch %173
        %173 = OpLabel
        %205 = OpLoad %6 %169
        %206 = OpIAdd %6 %205 %32
               OpStore %169 %206
               OpBranch %170
        %172 = OpLabel
        %209 = OpLoad %125 %127
        %210 = OpExtInst %125 %1 FAbs %209
        %211 = OpExtInst %125 %1 Normalize %210
        %212 = OpCompositeExtract %20 %211 0
        %213 = OpCompositeExtract %20 %211 1
        %214 = OpCompositeExtract %20 %211 2
        %215 = OpCompositeConstruct %143 %212 %213 %214 %192
               OpStore %208 %215
               OpReturn
               OpFunctionEnd
         %13 = OpFunction %2 None %10
         %11 = OpFunctionParameter %8
         %12 = OpFunctionParameter %9
         %14 = OpLabel
         %38 = OpAccessChain %9 %11 %37
               OpStore %38 %32
               OpReturn
               OpFunctionEnd
         %18 = OpFunction %2 None %15
         %16 = OpFunctionParameter %9
         %17 = OpFunctionParameter %9
         %19 = OpLabel
         %39 = OpVariable %9 Function
         %40 = OpVariable %9 Function
         %65 = OpVariable %8 Function
         %69 = OpVariable %9 Function
               OpStore %39 %37
               OpStore %40 %37
               OpBranch %41
         %41 = OpLabel
               OpLoopMerge %43 %44 None
               OpBranch %45
         %45 = OpLabel
               OpBranchConditional %47 %42 %43
         %42 = OpLabel
         %48 = OpLoad %6 %40
         %50 = OpSGreaterThanEqual %46 %48 %49
               OpSelectionMerge %52 None
               OpBranchConditional %50 %51 %52
         %51 = OpLabel
               OpBranch %43
         %52 = OpLabel
         %54 = OpLoad %6 %40
         %55 = OpIAdd %6 %54 %32
               OpStore %40 %55
         %56 = OpLoad %6 %39
         %58 = OpExtInst %6 %1 SClamp %56 %37 %57
         %60 = OpAccessChain %59 %31 %58 %32
         %61 = OpLoad %6 %60
         %62 = OpIEqual %46 %61 %33
               OpSelectionMerge %64 None
               OpBranchConditional %62 %63 %74
         %63 = OpLabel
         %67 = OpAccessChain %66 %31 %32
         %68 = OpLoad %7 %67
               OpStore %65 %68
               OpStore %69 %32
         %70 = OpFunctionCall %2 %13 %65 %69
         %71 = OpLoad %7 %65
         %72 = OpAccessChain %66 %31 %32
               OpStore %72 %71
               OpReturn
         %74 = OpLabel
               OpStore %39 %32
               OpBranch %44
         %64 = OpLabel
               OpUnreachable
         %44 = OpLabel
               OpBranch %41
         %43 = OpLabel
               OpReturn
               OpFunctionEnd
         %25 = OpFunction %20 None %22
         %23 = OpFunctionParameter %21
         %24 = OpFunctionParameter %21
         %26 = OpLabel
         %76 = OpVariable %21 Function
         %78 = OpVariable %9 Function
        %109 = OpVariable %9 Function
        %110 = OpVariable %9 Function
               OpStore %76 %77
               OpStore %78 %32
               OpBranch %79
         %79 = OpLabel
               OpLoopMerge %81 %82 None
               OpBranch %83
         %83 = OpLabel
         %84 = OpLoad %6 %78
         %86 = OpSLessThan %46 %84 %85
               OpBranchConditional %86 %80 %81
         %80 = OpLabel
         %87 = OpLoad %6 %78
         %89 = OpSMod %6 %87 %88
         %90 = OpIEqual %46 %89 %37
               OpSelectionMerge %92 None
               OpBranchConditional %90 %91 %96
         %91 = OpLabel
         %94 = OpLoad %20 %76
         %95 = OpFAdd %20 %94 %93
               OpStore %76 %95
               OpBranch %92
         %96 = OpLabel
         %97 = OpLoad %6 %78
         %98 = OpConvertSToF %20 %97
         %99 = OpLoad %20 %24
        %100 = OpExtInst %20 %1 Round %99
        %101 = OpFMod %20 %98 %100
        %103 = OpFOrdLessThanEqual %46 %101 %102
               OpSelectionMerge %105 None
               OpBranchConditional %103 %104 %105
        %104 = OpLabel
        %107 = OpLoad %20 %76
        %108 = OpFAdd %20 %107 %106
               OpStore %76 %108
               OpBranch %105
        %105 = OpLabel
               OpBranch %92
         %92 = OpLabel
               OpStore %109 %32
               OpStore %110 %32
        %111 = OpFunctionCall %2 %18 %109 %110
        %112 = OpLoad %6 %78
        %113 = OpConvertSToF %20 %112
        %114 = OpLoad %20 %23
        %115 = OpFOrdGreaterThanEqual %46 %113 %114
               OpSelectionMerge %117 None
               OpBranchConditional %115 %116 %117
        %116 = OpLabel
        %118 = OpLoad %20 %76
               OpReturnValue %118
        %117 = OpLabel
               OpBranch %82
         %82 = OpLabel
        %120 = OpLoad %6 %78
        %121 = OpIAdd %6 %120 %32
               OpStore %78 %121
               OpBranch %79
         %81 = OpLabel
        %122 = OpLoad %20 %76
               OpReturnValue %122
               OpFunctionEnd
