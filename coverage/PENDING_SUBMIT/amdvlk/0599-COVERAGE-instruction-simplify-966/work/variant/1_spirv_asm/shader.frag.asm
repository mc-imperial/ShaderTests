; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 93
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %74
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "_GLF_global_loop_count"
               OpName %11 "a"
               OpName %15 "buf0"
               OpMemberName %15 0 "_GLF_uniform_int_values"
               OpName %17 ""
               OpName %33 "b"
               OpName %39 "arr"
               OpName %74 "_GLF_color"
               OpDecorate %14 ArrayStride 16
               OpMemberDecorate %15 0 Offset 0
               OpDecorate %15 Block
               OpDecorate %17 DescriptorSet 0
               OpDecorate %17 Binding 0
               OpDecorate %74 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Private %6
          %8 = OpVariable %7 Private
          %9 = OpConstant %6 0
         %10 = OpTypePointer Function %6
         %12 = OpTypeInt 32 0
         %13 = OpConstant %12 2
         %14 = OpTypeArray %6 %13
         %15 = OpTypeStruct %14
         %16 = OpTypePointer Uniform %15
         %17 = OpVariable %16 Uniform
         %18 = OpTypePointer Uniform %6
         %27 = OpConstant %6 10
         %28 = OpTypeBool
         %31 = OpConstant %6 1
         %36 = OpConstant %12 10
         %37 = OpTypeArray %6 %36
         %38 = OpTypePointer Function %37
         %71 = OpTypeFloat 32
         %72 = OpTypeVector %71 4
         %73 = OpTypePointer Output %72
         %74 = OpVariable %73 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %33 = OpVariable %10 Function
         %39 = OpVariable %38 Function
               OpStore %8 %9
         %19 = OpAccessChain %18 %17 %9 %9
         %20 = OpLoad %6 %19
               OpStore %11 %20
               OpBranch %21
         %21 = OpLabel
               OpLoopMerge %23 %24 None
               OpBranch %25
         %25 = OpLabel
         %26 = OpLoad %6 %8
         %29 = OpSLessThan %28 %26 %27
               OpBranchConditional %29 %22 %23
         %22 = OpLabel
         %30 = OpLoad %6 %8
         %32 = OpIAdd %6 %30 %31
               OpStore %8 %32
         %34 = OpAccessChain %18 %17 %9 %9
         %35 = OpLoad %6 %34
               OpStore %33 %35
         %40 = OpAccessChain %18 %17 %9 %31
         %41 = OpLoad %6 %40
         %42 = OpLoad %6 %11
         %43 = OpLoad %6 %11
         %44 = OpSDiv %6 %42 %43
         %45 = OpAccessChain %18 %17 %9 %31
         %46 = OpLoad %6 %45
         %47 = OpAccessChain %18 %17 %9 %31
         %48 = OpLoad %6 %47
         %49 = OpAccessChain %18 %17 %9 %31
         %50 = OpLoad %6 %49
         %51 = OpAccessChain %18 %17 %9 %31
         %52 = OpLoad %6 %51
         %53 = OpAccessChain %18 %17 %9 %31
         %54 = OpLoad %6 %53
         %55 = OpAccessChain %18 %17 %9 %31
         %56 = OpLoad %6 %55
         %57 = OpAccessChain %18 %17 %9 %31
         %58 = OpLoad %6 %57
         %59 = OpAccessChain %18 %17 %9 %31
         %60 = OpLoad %6 %59
         %61 = OpCompositeConstruct %37 %41 %44 %46 %48 %50 %52 %54 %56 %58 %60
               OpStore %39 %61
         %62 = OpLoad %6 %33
         %63 = OpAccessChain %10 %39 %62
         %64 = OpLoad %6 %63
               OpStore %11 %64
               OpBranch %24
         %24 = OpLabel
               OpBranch %21
         %23 = OpLabel
         %65 = OpLoad %6 %11
         %66 = OpAccessChain %18 %17 %9 %9
         %67 = OpLoad %6 %66
         %68 = OpIEqual %28 %65 %67
               OpSelectionMerge %70 None
               OpBranchConditional %68 %69 %88
         %69 = OpLabel
         %75 = OpAccessChain %18 %17 %9 %9
         %76 = OpLoad %6 %75
         %77 = OpConvertSToF %71 %76
         %78 = OpAccessChain %18 %17 %9 %31
         %79 = OpLoad %6 %78
         %80 = OpConvertSToF %71 %79
         %81 = OpAccessChain %18 %17 %9 %31
         %82 = OpLoad %6 %81
         %83 = OpConvertSToF %71 %82
         %84 = OpAccessChain %18 %17 %9 %9
         %85 = OpLoad %6 %84
         %86 = OpConvertSToF %71 %85
         %87 = OpCompositeConstruct %72 %77 %80 %83 %86
               OpStore %74 %87
               OpBranch %70
         %88 = OpLabel
         %89 = OpAccessChain %18 %17 %9 %31
         %90 = OpLoad %6 %89
         %91 = OpConvertSToF %71 %90
         %92 = OpCompositeConstruct %72 %91 %91 %91 %91
               OpStore %74 %92
               OpBranch %70
         %70 = OpLabel
               OpReturn
               OpFunctionEnd
