; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 77
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %12 %64
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %12 "gl_FragCoord"
               OpName %19 "i"
               OpName %64 "_GLF_color"
               OpName %73 "indexable"
               OpDecorate %12 BuiltIn FragCoord
               OpDecorate %64 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpTypeFloat 32
         %10 = OpTypeVector %9 4
         %11 = OpTypePointer Input %10
         %12 = OpVariable %11 Input
         %13 = OpTypeInt 32 0
         %14 = OpConstant %13 0
         %15 = OpTypePointer Input %9
         %20 = OpConstant %6 1
         %27 = OpConstant %6 3
         %28 = OpTypeBool
         %30 = OpConstant %13 1
         %33 = OpConstant %9 0
         %41 = OpConstant %6 0
         %53 = OpConstant %6 2
         %63 = OpTypePointer Output %10
         %64 = OpVariable %63 Output
         %65 = OpConstant %13 5
         %66 = OpTypeArray %10 %65
         %67 = OpConstant %9 1
         %68 = OpConstantComposite %10 %67 %33 %33 %67
         %69 = OpConstantComposite %10 %33 %33 %33 %33
         %70 = OpConstantComposite %66 %68 %68 %68 %69 %69
         %72 = OpTypePointer Function %66
         %74 = OpTypePointer Function %10
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %19 = OpVariable %7 Function
         %73 = OpVariable %72 Function
         %16 = OpAccessChain %15 %12 %14
         %17 = OpLoad %9 %16
         %18 = OpConvertFToS %6 %17
               OpStore %8 %18
               OpStore %19 %20
               OpBranch %21
         %21 = OpLabel
               OpLoopMerge %23 %24 None
               OpBranch %25
         %25 = OpLabel
         %26 = OpLoad %6 %19
         %29 = OpSLessThan %28 %26 %27
               OpBranchConditional %29 %22 %23
         %22 = OpLabel
         %31 = OpAccessChain %15 %12 %30
         %32 = OpLoad %9 %31
         %34 = OpFOrdLessThan %28 %32 %33
               OpSelectionMerge %36 None
               OpBranchConditional %34 %35 %36
         %35 = OpLabel
               OpReturn
         %36 = OpLabel
               OpBranch %24
         %24 = OpLabel
         %38 = OpLoad %6 %19
         %39 = OpIAdd %6 %38 %20
               OpStore %19 %39
               OpBranch %21
         %23 = OpLabel
         %40 = OpLoad %6 %8
         %42 = OpSLessThan %28 %40 %41
               OpSelectionMerge %44 None
               OpBranchConditional %42 %43 %44
         %43 = OpLabel
         %45 = OpLoad %6 %8
         %46 = OpSNegate %6 %45
               OpStore %8 %46
               OpBranch %44
         %44 = OpLabel
               OpBranch %47
         %47 = OpLabel
               OpLoopMerge %49 %50 None
               OpBranch %51
         %51 = OpLabel
         %52 = OpLoad %6 %8
         %54 = OpSGreaterThan %28 %52 %53
               OpBranchConditional %54 %48 %49
         %48 = OpLabel
         %55 = OpLoad %6 %8
         %56 = OpISub %6 %55 %53
               OpStore %8 %56
         %57 = OpAccessChain %15 %12 %30
         %58 = OpLoad %9 %57
         %59 = OpFOrdLessThan %28 %58 %33
               OpSelectionMerge %61 None
               OpBranchConditional %59 %60 %61
         %60 = OpLabel
               OpBranch %49
         %61 = OpLabel
               OpBranch %50
         %50 = OpLabel
               OpBranch %47
         %49 = OpLabel
         %71 = OpLoad %6 %8
               OpStore %73 %70
         %75 = OpAccessChain %74 %73 %71
         %76 = OpLoad %10 %75
               OpStore %64 %76
               OpReturn
               OpFunctionEnd
