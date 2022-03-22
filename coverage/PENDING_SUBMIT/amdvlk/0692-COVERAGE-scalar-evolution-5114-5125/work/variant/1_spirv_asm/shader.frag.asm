; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 133
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %33
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "_GLF_global_loop_count"
               OpName %14 "data"
               OpName %18 "i"
               OpName %21 "buf0"
               OpMemberName %21 0 "_GLF_uniform_int_values"
               OpName %23 ""
               OpName %27 "j"
               OpName %33 "_GLF_color"
               OpName %61 "k"
               OpName %88 "buf1"
               OpMemberName %88 0 "_GLF_uniform_float_values"
               OpName %90 ""
               OpDecorate %20 ArrayStride 16
               OpMemberDecorate %21 0 Offset 0
               OpDecorate %21 Block
               OpDecorate %23 DescriptorSet 0
               OpDecorate %23 Binding 0
               OpDecorate %33 Location 0
               OpDecorate %87 ArrayStride 16
               OpMemberDecorate %88 0 Offset 0
               OpDecorate %88 Block
               OpDecorate %90 DescriptorSet 0
               OpDecorate %90 Binding 1
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Private %6
          %8 = OpVariable %7 Private
          %9 = OpConstant %6 0
         %10 = OpTypeInt 32 0
         %11 = OpConstant %10 2
         %12 = OpTypeArray %6 %11
         %13 = OpTypePointer Function %12
         %15 = OpConstant %6 1
         %16 = OpConstantComposite %12 %9 %15
         %17 = OpTypePointer Function %6
         %19 = OpConstant %10 3
         %20 = OpTypeArray %6 %19
         %21 = OpTypeStruct %20
         %22 = OpTypePointer Uniform %21
         %23 = OpVariable %22 Uniform
         %24 = OpTypePointer Uniform %6
         %30 = OpTypeFloat 32
         %31 = OpTypeVector %30 4
         %32 = OpTypePointer Output %31
         %33 = OpVariable %32 Output
         %43 = OpTypeBool
         %56 = OpConstant %6 10
         %86 = OpConstant %10 6
         %87 = OpTypeArray %30 %86
         %88 = OpTypeStruct %87
         %89 = OpTypePointer Uniform %88
         %90 = OpVariable %89 Uniform
         %91 = OpConstant %6 5
         %92 = OpTypePointer Uniform %30
         %95 = OpConstant %6 2
         %98 = OpConstant %6 3
        %127 = OpConstant %6 4
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %14 = OpVariable %13 Function
         %18 = OpVariable %17 Function
         %27 = OpVariable %17 Function
         %61 = OpVariable %17 Function
               OpStore %8 %9
               OpStore %14 %16
         %25 = OpAccessChain %24 %23 %9 %9
         %26 = OpLoad %6 %25
               OpStore %18 %26
         %28 = OpAccessChain %24 %23 %9 %9
         %29 = OpLoad %6 %28
               OpStore %27 %29
         %34 = OpAccessChain %24 %23 %9 %15
         %35 = OpLoad %6 %34
         %36 = OpConvertSToF %30 %35
         %37 = OpCompositeConstruct %31 %36 %36 %36 %36
               OpStore %33 %37
               OpBranch %38
         %38 = OpLabel
               OpLoopMerge %40 %41 None
               OpBranch %42
         %42 = OpLabel
         %44 = OpLoad %6 %18
         %45 = OpAccessChain %24 %23 %9 %9
         %46 = OpLoad %6 %45
         %47 = OpSLessThanEqual %43 %44 %46
               OpSelectionMerge %49 None
               OpBranchConditional %47 %48 %49
         %48 = OpLabel
         %50 = OpLoad %6 %27
         %51 = OpAccessChain %24 %23 %9 %9
         %52 = OpLoad %6 %51
         %53 = OpSLessThanEqual %43 %50 %52
               OpBranch %49
         %49 = OpLabel
         %54 = OpPhi %43 %47 %42 %53 %48
         %55 = OpLoad %6 %8
         %57 = OpSLessThan %43 %55 %56
         %58 = OpLogicalAnd %43 %54 %57
               OpBranchConditional %58 %39 %40
         %39 = OpLabel
         %59 = OpLoad %6 %8
         %60 = OpIAdd %6 %59 %15
               OpStore %8 %60
               OpStore %61 %15
               OpBranch %62
         %62 = OpLabel
               OpLoopMerge %64 %65 None
               OpBranch %66
         %66 = OpLabel
         %67 = OpLoad %6 %61
         %68 = OpINotEqual %43 %67 %9
         %69 = OpLoad %6 %8
         %70 = OpSLessThan %43 %69 %56
         %71 = OpLogicalAnd %43 %68 %70
               OpBranchConditional %71 %63 %64
         %63 = OpLabel
         %72 = OpLoad %6 %8
         %73 = OpIAdd %6 %72 %15
               OpStore %8 %73
         %74 = OpLoad %6 %18
         %75 = OpAccessChain %17 %14 %74
         %76 = OpLoad %6 %75
         %77 = OpLoad %6 %27
         %78 = OpAccessChain %17 %14 %77
         %79 = OpLoad %6 %78
         %80 = OpSLessThan %43 %76 %79
               OpSelectionMerge %82 None
               OpBranchConditional %80 %81 %85
         %81 = OpLabel
         %83 = OpLoad %6 %18
         %84 = OpIAdd %6 %83 %15
               OpStore %18 %84
               OpBranch %82
         %85 = OpLabel
         %93 = OpAccessChain %92 %90 %9 %91
         %94 = OpLoad %30 %93
         %96 = OpAccessChain %92 %90 %9 %95
         %97 = OpLoad %30 %96
         %99 = OpAccessChain %92 %90 %9 %98
        %100 = OpLoad %30 %99
        %101 = OpAccessChain %92 %90 %9 %9
        %102 = OpLoad %30 %101
        %103 = OpCompositeConstruct %31 %94 %97 %100 %102
               OpStore %33 %103
        %104 = OpLoad %6 %27
        %105 = OpIAdd %6 %104 %15
               OpStore %27 %105
               OpBranch %82
         %82 = OpLabel
               OpBranch %65
         %65 = OpLabel
        %106 = OpLoad %6 %61
        %107 = OpISub %6 %106 %15
               OpStore %61 %107
               OpBranch %62
         %64 = OpLabel
               OpBranch %41
         %41 = OpLabel
               OpBranch %38
         %40 = OpLabel
        %108 = OpLoad %6 %18
        %109 = OpAccessChain %24 %23 %9 %9
        %110 = OpLoad %6 %109
        %111 = OpIEqual %43 %108 %110
               OpSelectionMerge %113 None
               OpBranchConditional %111 %112 %113
        %112 = OpLabel
        %114 = OpLoad %6 %27
        %115 = OpAccessChain %24 %23 %9 %95
        %116 = OpLoad %6 %115
        %117 = OpIEqual %43 %114 %116
               OpBranch %113
        %113 = OpLabel
        %118 = OpPhi %43 %111 %40 %117 %112
               OpSelectionMerge %120 None
               OpBranchConditional %118 %119 %120
        %119 = OpLabel
        %121 = OpAccessChain %92 %90 %9 %15
        %122 = OpLoad %30 %121
        %123 = OpAccessChain %92 %90 %9 %95
        %124 = OpLoad %30 %123
        %125 = OpAccessChain %92 %90 %9 %98
        %126 = OpLoad %30 %125
        %128 = OpAccessChain %92 %90 %9 %127
        %129 = OpLoad %30 %128
        %130 = OpCompositeConstruct %31 %122 %124 %126 %129
        %131 = OpLoad %31 %33
        %132 = OpFSub %31 %131 %130
               OpStore %33 %132
               OpBranch %120
        %120 = OpLabel
               OpReturn
               OpFunctionEnd
