; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 140
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %121
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "_GLF_global_loop_count"
               OpName %14 "arr0"
               OpName %17 "arr1"
               OpName %21 "i"
               OpName %24 "buf0"
               OpMemberName %24 0 "_GLF_uniform_int_values"
               OpName %26 ""
               OpName %41 "k"
               OpName %44 "j"
               OpName %121 "_GLF_color"
               OpDecorate %23 ArrayStride 16
               OpMemberDecorate %24 0 Offset 0
               OpDecorate %24 Block
               OpDecorate %26 DescriptorSet 0
               OpDecorate %26 Binding 0
               OpDecorate %121 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Private %6
          %8 = OpVariable %7 Private
          %9 = OpConstant %6 0
         %10 = OpTypeInt 32 0
         %11 = OpConstant %10 10
         %12 = OpTypeArray %6 %11
         %13 = OpTypePointer Private %12
         %14 = OpVariable %13 Private
         %15 = OpConstant %6 1
         %16 = OpConstantComposite %12 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15
         %17 = OpVariable %13 Private
         %18 = OpConstant %6 2
         %19 = OpConstantComposite %12 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18
         %20 = OpTypePointer Function %6
         %22 = OpConstant %10 6
         %23 = OpTypeArray %6 %22
         %24 = OpTypeStruct %23
         %25 = OpTypePointer Uniform %24
         %26 = OpVariable %25 Uniform
         %27 = OpTypePointer Uniform %6
         %36 = OpConstant %6 10
         %37 = OpTypeBool
         %52 = OpConstant %6 4
         %96 = OpConstant %6 3
        %107 = OpConstant %6 5
        %118 = OpTypeFloat 32
        %119 = OpTypeVector %118 4
        %120 = OpTypePointer Output %119
        %121 = OpVariable %120 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %21 = OpVariable %20 Function
         %41 = OpVariable %20 Function
         %44 = OpVariable %20 Function
               OpStore %8 %9
               OpStore %14 %16
               OpStore %17 %19
         %28 = OpAccessChain %27 %26 %9 %15
         %29 = OpLoad %6 %28
               OpStore %21 %29
               OpBranch %30
         %30 = OpLabel
               OpLoopMerge %32 %33 None
               OpBranch %34
         %34 = OpLabel
         %35 = OpLoad %6 %8
         %38 = OpSLessThan %37 %35 %36
               OpBranchConditional %38 %31 %32
         %31 = OpLabel
         %39 = OpLoad %6 %8
         %40 = OpIAdd %6 %39 %15
               OpStore %8 %40
         %42 = OpAccessChain %27 %26 %9 %15
         %43 = OpLoad %6 %42
               OpStore %41 %43
         %45 = OpLoad %6 %21
               OpStore %44 %45
               OpBranch %46
         %46 = OpLabel
               OpLoopMerge %48 %49 None
               OpBranch %50
         %50 = OpLabel
         %51 = OpLoad %6 %44
         %53 = OpAccessChain %27 %26 %9 %52
         %54 = OpLoad %6 %53
         %55 = OpSLessThan %37 %51 %54
         %56 = OpLoad %6 %8
         %57 = OpSLessThan %37 %56 %36
         %58 = OpLogicalAnd %37 %55 %57
               OpBranchConditional %58 %47 %48
         %47 = OpLabel
         %59 = OpLoad %6 %8
         %60 = OpIAdd %6 %59 %15
               OpStore %8 %60
         %61 = OpLoad %6 %41
         %62 = OpIAdd %6 %61 %15
               OpStore %41 %62
         %63 = OpLoad %6 %44
         %64 = OpIAdd %6 %63 %15
               OpStore %44 %64
         %65 = OpAccessChain %7 %14 %63
         %66 = OpLoad %6 %65
         %67 = OpAccessChain %7 %17 %61
               OpStore %67 %66
               OpBranch %49
         %49 = OpLabel
               OpBranch %46
         %48 = OpLabel
         %68 = OpAccessChain %27 %26 %9 %15
         %69 = OpLoad %6 %68
         %70 = OpAccessChain %27 %26 %9 %15
         %71 = OpLoad %6 %70
         %72 = OpAccessChain %7 %17 %71
         %73 = OpLoad %6 %72
         %74 = OpAccessChain %7 %14 %69
               OpStore %74 %73
               OpBranch %33
         %33 = OpLabel
         %75 = OpLoad %6 %21
         %76 = OpIAdd %6 %75 %15
               OpStore %21 %76
               OpBranch %30
         %32 = OpLabel
         %77 = OpAccessChain %27 %26 %9 %9
         %78 = OpLoad %6 %77
         %79 = OpAccessChain %7 %17 %78
         %80 = OpLoad %6 %79
         %81 = OpAccessChain %27 %26 %9 %18
         %82 = OpLoad %6 %81
         %83 = OpIEqual %37 %80 %82
               OpSelectionMerge %85 None
               OpBranchConditional %83 %84 %85
         %84 = OpLabel
         %86 = OpAccessChain %27 %26 %9 %15
         %87 = OpLoad %6 %86
         %88 = OpAccessChain %7 %17 %87
         %89 = OpLoad %6 %88
         %90 = OpAccessChain %27 %26 %9 %15
         %91 = OpLoad %6 %90
         %92 = OpIEqual %37 %89 %91
               OpBranch %85
         %85 = OpLabel
         %93 = OpPhi %37 %83 %32 %92 %84
               OpSelectionMerge %95 None
               OpBranchConditional %93 %94 %95
         %94 = OpLabel
         %97 = OpAccessChain %27 %26 %9 %96
         %98 = OpLoad %6 %97
         %99 = OpAccessChain %7 %17 %98
        %100 = OpLoad %6 %99
        %101 = OpAccessChain %27 %26 %9 %15
        %102 = OpLoad %6 %101
        %103 = OpIEqual %37 %100 %102
               OpBranch %95
         %95 = OpLabel
        %104 = OpPhi %37 %93 %85 %103 %94
               OpSelectionMerge %106 None
               OpBranchConditional %104 %105 %106
        %105 = OpLabel
        %108 = OpAccessChain %27 %26 %9 %107
        %109 = OpLoad %6 %108
        %110 = OpAccessChain %7 %17 %109
        %111 = OpLoad %6 %110
        %112 = OpAccessChain %27 %26 %9 %15
        %113 = OpLoad %6 %112
        %114 = OpIEqual %37 %111 %113
               OpBranch %106
        %106 = OpLabel
        %115 = OpPhi %37 %104 %95 %114 %105
               OpSelectionMerge %117 None
               OpBranchConditional %115 %116 %135
        %116 = OpLabel
        %122 = OpAccessChain %27 %26 %9 %15
        %123 = OpLoad %6 %122
        %124 = OpConvertSToF %118 %123
        %125 = OpAccessChain %27 %26 %9 %9
        %126 = OpLoad %6 %125
        %127 = OpConvertSToF %118 %126
        %128 = OpAccessChain %27 %26 %9 %9
        %129 = OpLoad %6 %128
        %130 = OpConvertSToF %118 %129
        %131 = OpAccessChain %27 %26 %9 %15
        %132 = OpLoad %6 %131
        %133 = OpConvertSToF %118 %132
        %134 = OpCompositeConstruct %119 %124 %127 %130 %133
               OpStore %121 %134
               OpBranch %117
        %135 = OpLabel
        %136 = OpAccessChain %27 %26 %9 %9
        %137 = OpLoad %6 %136
        %138 = OpConvertSToF %118 %137
        %139 = OpCompositeConstruct %119 %138 %138 %138 %138
               OpStore %121 %139
               OpBranch %117
        %117 = OpLabel
               OpReturn
               OpFunctionEnd
