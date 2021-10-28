; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 77
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %71
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "v"
               OpName %13 "buf1"
               OpMemberName %13 0 "_GLF_uniform_float_values"
               OpName %15 ""
               OpName %23 "i"
               OpName %26 "buf0"
               OpMemberName %26 0 "_GLF_uniform_int_values"
               OpName %28 ""
               OpName %53 "i"
               OpName %62 "j"
               OpName %71 "_GLF_color"
               OpDecorate %12 ArrayStride 16
               OpMemberDecorate %13 0 Offset 0
               OpDecorate %13 Block
               OpDecorate %15 DescriptorSet 0
               OpDecorate %15 Binding 1
               OpDecorate %25 ArrayStride 16
               OpMemberDecorate %26 0 Offset 0
               OpDecorate %26 Block
               OpDecorate %28 DescriptorSet 0
               OpDecorate %28 Binding 0
               OpDecorate %71 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Function %7
         %10 = OpTypeInt 32 0
         %11 = OpConstant %10 1
         %12 = OpTypeArray %6 %11
         %13 = OpTypeStruct %12
         %14 = OpTypePointer Uniform %13
         %15 = OpVariable %14 Uniform
         %16 = OpTypeInt 32 1
         %17 = OpConstant %16 0
         %18 = OpTypePointer Uniform %6
         %22 = OpTypePointer Function %16
         %24 = OpConstant %10 2
         %25 = OpTypeArray %16 %24
         %26 = OpTypeStruct %25
         %27 = OpTypePointer Uniform %26
         %28 = OpVariable %27 Uniform
         %29 = OpTypePointer Uniform %16
         %38 = OpConstant %16 1
         %41 = OpTypeBool
         %46 = OpTypePointer Function %6
         %54 = OpConstant %16 2
         %70 = OpTypePointer Output %7
         %71 = OpVariable %70 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %9 = OpVariable %8 Function
         %23 = OpVariable %22 Function
         %53 = OpVariable %22 Function
         %62 = OpVariable %22 Function
         %19 = OpAccessChain %18 %15 %17 %17
         %20 = OpLoad %6 %19
         %21 = OpCompositeConstruct %7 %20 %20 %20 %20
               OpStore %9 %21
         %30 = OpAccessChain %29 %28 %17 %17
         %31 = OpLoad %16 %30
               OpStore %23 %31
               OpBranch %32
         %32 = OpLabel
               OpLoopMerge %34 %35 None
               OpBranch %36
         %36 = OpLabel
         %37 = OpLoad %16 %23
         %39 = OpAccessChain %29 %28 %17 %38
         %40 = OpLoad %16 %39
         %42 = OpSGreaterThan %41 %37 %40
               OpBranchConditional %42 %33 %34
         %33 = OpLabel
         %43 = OpLoad %16 %23
         %44 = OpAccessChain %18 %15 %17 %17
         %45 = OpLoad %6 %44
         %47 = OpAccessChain %46 %9 %43
         %48 = OpLoad %6 %47
         %49 = OpFSub %6 %48 %45
         %50 = OpAccessChain %46 %9 %43
               OpStore %50 %49
               OpBranch %35
         %35 = OpLabel
         %51 = OpLoad %16 %23
         %52 = OpISub %16 %51 %38
               OpStore %23 %52
               OpBranch %32
         %34 = OpLabel
               OpStore %53 %54
               OpBranch %55
         %55 = OpLabel
               OpLoopMerge %57 %58 None
               OpBranch %59
         %59 = OpLabel
         %60 = OpLoad %16 %53
         %61 = OpSGreaterThan %41 %60 %17
               OpBranchConditional %61 %56 %57
         %56 = OpLabel
               OpStore %62 %54
               OpBranch %63
         %63 = OpLabel
               OpLoopMerge %65 %66 None
               OpBranch %67
         %67 = OpLabel
         %68 = OpLoad %16 %62
         %69 = OpINotEqual %41 %68 %17
               OpBranchConditional %69 %64 %65
         %64 = OpLabel
         %72 = OpLoad %7 %9
               OpStore %71 %72
               OpBranch %66
         %66 = OpLabel
         %73 = OpLoad %16 %62
         %74 = OpISub %16 %73 %38
               OpStore %62 %74
               OpBranch %63
         %65 = OpLabel
               OpBranch %58
         %58 = OpLabel
         %75 = OpLoad %16 %53
         %76 = OpISub %16 %75 %38
               OpStore %53 %76
               OpBranch %55
         %57 = OpLabel
               OpReturn
               OpFunctionEnd
