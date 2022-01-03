; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 101
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %13
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "_GLF_global_loop_count"
               OpName %13 "_GLF_color"
               OpName %17 "buf0"
               OpMemberName %17 0 "_GLF_uniform_int_values"
               OpName %19 ""
               OpName %36 "i"
               OpName %53 "i"
               OpName %78 "v"
               OpDecorate %13 Location 0
               OpDecorate %16 ArrayStride 16
               OpMemberDecorate %17 0 Offset 0
               OpDecorate %17 Block
               OpDecorate %19 DescriptorSet 0
               OpDecorate %19 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Private %6
          %8 = OpVariable %7 Private
          %9 = OpConstant %6 0
         %10 = OpTypeFloat 32
         %11 = OpTypeVector %10 4
         %12 = OpTypePointer Output %11
         %13 = OpVariable %12 Output
         %14 = OpTypeInt 32 0
         %15 = OpConstant %14 2
         %16 = OpTypeArray %6 %15
         %17 = OpTypeStruct %16
         %18 = OpTypePointer Uniform %17
         %19 = OpVariable %18 Uniform
         %20 = OpTypePointer Uniform %6
         %24 = OpConstant %6 1
         %35 = OpTypePointer Function %6
         %47 = OpTypeBool
         %50 = OpConstant %6 10
         %77 = OpTypePointer Function %11
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %36 = OpVariable %35 Function
         %53 = OpVariable %35 Function
         %78 = OpVariable %77 Function
               OpStore %8 %9
         %21 = OpAccessChain %20 %19 %9 %9
         %22 = OpLoad %6 %21
         %23 = OpConvertSToF %10 %22
         %25 = OpAccessChain %20 %19 %9 %24
         %26 = OpLoad %6 %25
         %27 = OpConvertSToF %10 %26
         %28 = OpAccessChain %20 %19 %9 %24
         %29 = OpLoad %6 %28
         %30 = OpConvertSToF %10 %29
         %31 = OpAccessChain %20 %19 %9 %9
         %32 = OpLoad %6 %31
         %33 = OpConvertSToF %10 %32
         %34 = OpCompositeConstruct %11 %23 %27 %30 %33
               OpStore %13 %34
         %37 = OpAccessChain %20 %19 %9 %9
         %38 = OpLoad %6 %37
               OpStore %36 %38
               OpBranch %39
         %39 = OpLabel
               OpLoopMerge %41 %42 None
               OpBranch %43
         %43 = OpLabel
         %44 = OpLoad %6 %36
         %45 = OpAccessChain %20 %19 %9 %24
         %46 = OpLoad %6 %45
         %48 = OpSGreaterThan %47 %44 %46
         %49 = OpLoad %6 %8
         %51 = OpSLessThan %47 %49 %50
         %52 = OpLogicalAnd %47 %48 %51
               OpBranchConditional %52 %40 %41
         %40 = OpLabel
         %54 = OpAccessChain %20 %19 %9 %9
         %55 = OpLoad %6 %54
               OpStore %53 %55
               OpBranch %56
         %56 = OpLabel
               OpLoopMerge %58 %59 None
               OpBranch %60
         %60 = OpLabel
         %61 = OpLoad %6 %53
         %62 = OpAccessChain %20 %19 %9 %24
         %63 = OpLoad %6 %62
         %64 = OpINotEqual %47 %61 %63
         %65 = OpLoad %6 %8
         %66 = OpSLessThan %47 %65 %50
         %67 = OpLogicalAnd %47 %64 %66
               OpBranchConditional %67 %57 %58
         %57 = OpLabel
               OpBranch %68
         %68 = OpLabel
               OpLoopMerge %70 %71 None
               OpBranch %72
         %72 = OpLabel
         %73 = OpLoad %6 %8
         %74 = OpSLessThan %47 %73 %50
               OpBranchConditional %74 %69 %70
         %69 = OpLabel
         %75 = OpLoad %6 %8
         %76 = OpIAdd %6 %75 %24
               OpStore %8 %76
         %79 = OpLoad %11 %13
               OpStore %78 %79
               OpBranch %71
         %71 = OpLabel
               OpBranch %68
         %70 = OpLabel
         %80 = OpAccessChain %20 %19 %9 %24
         %81 = OpLoad %6 %80
         %82 = OpConvertSToF %10 %81
         %83 = OpCompositeConstruct %11 %82 %82 %82 %82
               OpStore %13 %83
         %84 = OpAccessChain %20 %19 %9 %9
         %85 = OpLoad %6 %84
         %86 = OpAccessChain %20 %19 %9 %24
         %87 = OpLoad %6 %86
         %88 = OpSGreaterThan %47 %85 %87
               OpSelectionMerge %90 None
               OpBranchConditional %88 %89 %92
         %89 = OpLabel
         %91 = OpLoad %11 %78
               OpStore %13 %91
               OpBranch %90
         %92 = OpLabel
         %93 = OpAccessChain %20 %19 %9 %24
         %94 = OpLoad %6 %93
         %95 = OpConvertSToF %10 %94
         %96 = OpCompositeConstruct %11 %95 %95 %95 %95
               OpStore %13 %96
               OpBranch %90
         %90 = OpLabel
               OpBranch %59
         %59 = OpLabel
         %97 = OpLoad %6 %53
         %98 = OpISub %6 %97 %24
               OpStore %53 %98
               OpBranch %56
         %58 = OpLabel
               OpBranch %42
         %42 = OpLabel
         %99 = OpLoad %6 %36
        %100 = OpISub %6 %99 %24
               OpStore %36 %100
               OpBranch %39
         %41 = OpLabel
               OpReturn
               OpFunctionEnd
