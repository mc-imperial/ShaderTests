; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 219
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %37 %80
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "arr"
               OpName %14 "buf1"
               OpMemberName %14 0 "_GLF_uniform_int_values"
               OpName %16 ""
               OpName %37 "_GLF_color"
               OpName %44 "i"
               OpName %57 "a"
               OpName %59 "b"
               OpName %80 "gl_FragCoord"
               OpName %87 "buf0"
               OpMemberName %87 0 "_GLF_uniform_float_values"
               OpName %89 ""
               OpName %107 "j"
               OpName %119 "k"
               OpName %131 "l"
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 1
               OpDecorate %37 Location 0
               OpDecorate %80 BuiltIn FragCoord
               OpDecorate %86 ArrayStride 16
               OpMemberDecorate %87 0 Offset 0
               OpDecorate %87 Block
               OpDecorate %89 DescriptorSet 0
               OpDecorate %89 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 5
          %9 = OpTypeArray %6 %8
         %10 = OpTypePointer Function %9
         %12 = OpConstant %7 11
         %13 = OpTypeArray %6 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpConstant %6 0
         %18 = OpConstant %6 3
         %19 = OpTypePointer Uniform %6
         %22 = OpConstant %6 4
         %25 = OpConstant %6 5
         %28 = OpConstant %6 6
         %34 = OpTypeFloat 32
         %35 = OpTypeVector %34 4
         %36 = OpTypePointer Output %35
         %37 = OpVariable %36 Output
         %38 = OpConstant %6 1
         %43 = OpTypePointer Function %6
         %55 = OpTypeBool
         %58 = OpConstant %6 -100
         %65 = OpConstant %6 7
         %79 = OpTypePointer Input %35
         %80 = OpVariable %79 Input
         %81 = OpConstant %7 0
         %82 = OpTypePointer Input %34
         %85 = OpConstant %7 1
         %86 = OpTypeArray %34 %85
         %87 = OpTypeStruct %86
         %88 = OpTypePointer Uniform %87
         %89 = OpVariable %88 Uniform
         %90 = OpTypePointer Uniform %34
         %96 = OpConstant %34 1
         %97 = OpConstantComposite %35 %96 %96 %96 %96
        %105 = OpConstant %6 10
        %158 = OpConstant %6 8
        %168 = OpConstant %6 9
        %199 = OpConstant %6 2
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %44 = OpVariable %43 Function
         %57 = OpVariable %43 Function
         %59 = OpVariable %43 Function
        %107 = OpVariable %43 Function
        %119 = OpVariable %43 Function
        %131 = OpVariable %43 Function
         %20 = OpAccessChain %19 %16 %17 %18
         %21 = OpLoad %6 %20
         %23 = OpAccessChain %19 %16 %17 %22
         %24 = OpLoad %6 %23
         %26 = OpAccessChain %19 %16 %17 %25
         %27 = OpLoad %6 %26
         %29 = OpAccessChain %19 %16 %17 %28
         %30 = OpLoad %6 %29
         %31 = OpAccessChain %19 %16 %17 %17
         %32 = OpLoad %6 %31
         %33 = OpCompositeConstruct %9 %21 %24 %27 %30 %32
               OpStore %11 %33
         %39 = OpAccessChain %19 %16 %17 %38
         %40 = OpLoad %6 %39
         %41 = OpConvertSToF %34 %40
         %42 = OpCompositeConstruct %35 %41 %41 %41 %41
               OpStore %37 %42
         %45 = OpAccessChain %19 %16 %17 %38
         %46 = OpLoad %6 %45
               OpStore %44 %46
               OpBranch %47
         %47 = OpLabel
               OpLoopMerge %49 %50 None
               OpBranch %51
         %51 = OpLabel
         %52 = OpLoad %6 %44
         %53 = OpAccessChain %19 %16 %17 %17
         %54 = OpLoad %6 %53
         %56 = OpSLessThan %55 %52 %54
               OpBranchConditional %56 %48 %49
         %48 = OpLabel
               OpStore %57 %58
               OpStore %59 %38
               OpBranch %60
         %60 = OpLabel
               OpLoopMerge %62 %63 None
               OpBranch %61
         %61 = OpLabel
         %64 = OpLoad %6 %59
         %66 = OpSGreaterThan %55 %64 %65
               OpSelectionMerge %68 None
               OpBranchConditional %66 %67 %68
         %67 = OpLabel
               OpBranch %62
         %68 = OpLabel
         %70 = OpLoad %6 %57
               OpSelectionMerge %73 None
               OpSwitch %70 %73 0 %71 5 %72
         %71 = OpLabel
         %74 = OpAccessChain %19 %16 %17 %18
         %75 = OpLoad %6 %74
         %76 = OpConvertSToF %34 %75
         %77 = OpCompositeConstruct %35 %76 %76 %76 %76
               OpStore %37 %77
               OpBranch %73
         %72 = OpLabel
         %83 = OpAccessChain %82 %80 %81
         %84 = OpLoad %34 %83
         %91 = OpAccessChain %90 %89 %17 %17
         %92 = OpLoad %34 %91
         %93 = OpFOrdLessThan %55 %84 %92
               OpSelectionMerge %95 None
               OpBranchConditional %93 %94 %95
         %94 = OpLabel
               OpStore %37 %97
               OpBranch %95
         %95 = OpLabel
               OpBranch %73
         %73 = OpLabel
        %100 = OpLoad %6 %57
        %101 = OpIAdd %6 %100 %38
               OpStore %57 %101
        %102 = OpLoad %6 %59
        %103 = OpIAdd %6 %102 %38
               OpStore %59 %103
               OpBranch %63
         %63 = OpLabel
        %104 = OpLoad %6 %57
        %106 = OpSLessThan %55 %104 %105
               OpBranchConditional %106 %60 %62
         %62 = OpLabel
        %108 = OpAccessChain %19 %16 %17 %38
        %109 = OpLoad %6 %108
               OpStore %107 %109
               OpBranch %110
        %110 = OpLabel
               OpLoopMerge %112 %113 None
               OpBranch %114
        %114 = OpLabel
        %115 = OpLoad %6 %107
        %116 = OpAccessChain %19 %16 %17 %17
        %117 = OpLoad %6 %116
        %118 = OpSLessThan %55 %115 %117
               OpBranchConditional %118 %111 %112
        %111 = OpLabel
        %120 = OpAccessChain %19 %16 %17 %38
        %121 = OpLoad %6 %120
               OpStore %119 %121
               OpBranch %122
        %122 = OpLabel
               OpLoopMerge %124 %125 None
               OpBranch %126
        %126 = OpLabel
        %127 = OpLoad %6 %119
        %128 = OpAccessChain %19 %16 %17 %25
        %129 = OpLoad %6 %128
        %130 = OpSLessThan %55 %127 %129
               OpBranchConditional %130 %123 %124
        %123 = OpLabel
        %132 = OpAccessChain %19 %16 %17 %38
        %133 = OpLoad %6 %132
               OpStore %131 %133
               OpBranch %134
        %134 = OpLabel
               OpLoopMerge %136 %137 None
               OpBranch %138
        %138 = OpLabel
        %139 = OpLoad %6 %131
        %140 = OpLoad %6 %119
        %141 = OpSLessThan %55 %139 %140
               OpBranchConditional %141 %135 %136
        %135 = OpLabel
        %142 = OpLoad %6 %107
        %143 = OpAccessChain %43 %11 %142
        %144 = OpLoad %6 %143
        %145 = OpIAdd %6 %144 %38
               OpStore %143 %145
               OpBranch %137
        %137 = OpLabel
        %146 = OpLoad %6 %131
        %147 = OpIAdd %6 %146 %38
               OpStore %131 %147
               OpBranch %134
        %136 = OpLabel
               OpBranch %125
        %125 = OpLabel
        %148 = OpLoad %6 %119
        %149 = OpIAdd %6 %148 %38
               OpStore %119 %149
               OpBranch %122
        %124 = OpLabel
               OpBranch %113
        %113 = OpLabel
        %150 = OpLoad %6 %107
        %151 = OpIAdd %6 %150 %38
               OpStore %107 %151
               OpBranch %110
        %112 = OpLabel
               OpBranch %50
         %50 = OpLabel
        %152 = OpLoad %6 %44
        %153 = OpIAdd %6 %152 %38
               OpStore %44 %153
               OpBranch %47
         %49 = OpLabel
        %154 = OpAccessChain %19 %16 %17 %38
        %155 = OpLoad %6 %154
        %156 = OpAccessChain %43 %11 %155
        %157 = OpLoad %6 %156
        %159 = OpAccessChain %19 %16 %17 %158
        %160 = OpLoad %6 %159
        %161 = OpIEqual %55 %157 %160
               OpSelectionMerge %163 None
               OpBranchConditional %161 %162 %163
        %162 = OpLabel
        %164 = OpAccessChain %19 %16 %17 %18
        %165 = OpLoad %6 %164
        %166 = OpAccessChain %43 %11 %165
        %167 = OpLoad %6 %166
        %169 = OpAccessChain %19 %16 %17 %168
        %170 = OpLoad %6 %169
        %171 = OpIEqual %55 %167 %170
               OpBranch %163
        %163 = OpLabel
        %172 = OpPhi %55 %161 %49 %171 %162
               OpSelectionMerge %174 None
               OpBranchConditional %172 %173 %174
        %173 = OpLabel
        %175 = OpAccessChain %19 %16 %17 %22
        %176 = OpLoad %6 %175
        %177 = OpAccessChain %43 %11 %176
        %178 = OpLoad %6 %177
        %179 = OpAccessChain %19 %16 %17 %105
        %180 = OpLoad %6 %179
        %181 = OpIEqual %55 %178 %180
               OpBranch %174
        %174 = OpLabel
        %182 = OpPhi %55 %172 %163 %181 %173
               OpSelectionMerge %184 None
               OpBranchConditional %182 %183 %184
        %183 = OpLabel
        %185 = OpAccessChain %19 %16 %17 %25
        %186 = OpLoad %6 %185
        %187 = OpAccessChain %43 %11 %186
        %188 = OpLoad %6 %187
        %189 = OpAccessChain %19 %16 %17 %65
        %190 = OpLoad %6 %189
        %191 = OpIEqual %55 %188 %190
               OpBranch %184
        %184 = OpLabel
        %192 = OpPhi %55 %182 %174 %191 %183
               OpSelectionMerge %194 None
               OpBranchConditional %192 %193 %194
        %193 = OpLabel
        %195 = OpAccessChain %19 %16 %17 %28
        %196 = OpLoad %6 %195
        %197 = OpAccessChain %43 %11 %196
        %198 = OpLoad %6 %197
        %200 = OpAccessChain %19 %16 %17 %199
        %201 = OpLoad %6 %200
        %202 = OpIEqual %55 %198 %201
               OpBranch %194
        %194 = OpLabel
        %203 = OpPhi %55 %192 %184 %202 %193
               OpSelectionMerge %205 None
               OpBranchConditional %203 %204 %205
        %204 = OpLabel
        %206 = OpAccessChain %19 %16 %17 %18
        %207 = OpLoad %6 %206
        %208 = OpConvertSToF %34 %207
        %209 = OpAccessChain %19 %16 %17 %38
        %210 = OpLoad %6 %209
        %211 = OpConvertSToF %34 %210
        %212 = OpAccessChain %19 %16 %17 %38
        %213 = OpLoad %6 %212
        %214 = OpConvertSToF %34 %213
        %215 = OpAccessChain %19 %16 %17 %18
        %216 = OpLoad %6 %215
        %217 = OpConvertSToF %34 %216
        %218 = OpCompositeConstruct %35 %208 %211 %214 %217
               OpStore %37 %218
               OpBranch %205
        %205 = OpLabel
               OpReturn
               OpFunctionEnd
